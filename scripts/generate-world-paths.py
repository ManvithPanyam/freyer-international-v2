import urllib.request
import json

url = 'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/cultural/ne_110m_admin_0_countries.json'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=15) as resp:
    data = json.loads(resp.read().decode('utf-8'))

W = 1000
H = 500

def project(lng, lat):
    x = (lng + 180.0) / 360.0 * W
    y = (90.0 - lat) / 180.0 * H
    return round(x, 1), round(y, 1)

def geom_to_path(geom):
    gtype = geom['type']
    coords = geom['coordinates']
    if gtype == 'Polygon':
        coords_list = [coords]
    elif gtype == 'MultiPolygon':
        coords_list = coords
    else:
        return ''
    
    parts = []
    for poly in coords_list:
        ring = poly[0]
        avg_lat = sum(p[1] for p in ring) / len(ring)
        if avg_lat < -62:
            continue
        pts = [project(p[0], p[1]) for p in ring]
        parts.append('M ' + ' L '.join(f'{x},{y}' for x, y in pts) + ' Z')
    return ' '.join(parts)

all_land_paths = []
country_paths = {}

VERIFIED_ISOS = {
    'IN': 'India',
    'CN': 'China',
    'JP': 'Japan',
    'KR': 'South Korea',
    'SA': 'Saudi Arabia',
    'AE': 'United Arab Emirates',
    'OM': 'Oman',
    'SO': 'Somalia',
    'IT': 'Italy',
    'DE': 'Germany'
}

for f in data['features']:
    props = f['properties']
    iso = props.get('ISO_A2') or props.get('iso_a2') or props.get('ADM0_A3')
    name = props.get('NAME') or props.get('name')
    path_d = geom_to_path(f['geometry'])
    if not path_d:
        continue
    all_land_paths.append(path_d)
    
    for code, cname in VERIFIED_ISOS.items():
        if iso == code or name == cname or (code == 'KR' and 'Korea' in name and 'North' not in name):
            country_paths[code] = path_d

combined_land = ' '.join(all_land_paths)

header = '''/**
 * WORLD MAP GEODETIC VECTOR PATHS
 * Projection: Equirectangular (Plate Carrée), ViewBox: 0 0 1000 500
 * Source: Natural Earth 1:110m Admin-0 Physical & Cultural GeoJSON
 * Antarctic polar void cropped to focus on global commercial maritime hemispheres.
 */

export const WORLD_VIEWBOX = "0 0 1000 500";

'''

with open('data/world-map-paths.ts', 'w', encoding='utf-8') as out:
    out.write(header)
    out.write(f'export const WORLD_LAND_PATH = {json.dumps(combined_land)};\n\n')
    out.write(f'export const VERIFIED_COUNTRY_PATHS: Record<string, string> = {json.dumps(country_paths, indent=2)};\n\n')
    out.write('''export function projectGeo(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180.0) / 360.0) * 1000;
  const y = ((90.0 - lat) / 180.0) * 500;
  return {
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10,
  };
}

export function getRouteArcPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curvatureFactor = 0.22,
  maxCurvature = 55
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Arch upwards towards north pole for maritime routes
  const curvature = Math.min(dist * curvatureFactor, maxCurvature);
  const cx = mx;
  const cy = my - curvature;

  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}
''')

print('Successfully written data/world-map-paths.ts!')
