import json
import os

filepath = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\Unified-Authentication.json"

# Leggi il file originale
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 1. Definiamo la logica JavaScript aggiornata per Validator_unified
updated_js_code = """// --- 1. CONFIGURAZIONE & INPUT ---
const item = $input.item.json;
const initData = item.body?._auth || item.query?._auth || item._auth;

if (!initData) {
  return {
    ...item,
    isValid: false,
    error: "Dato _auth di Telegram mancante"
  };
}

// Raccolta dei bot token da testare in ordine di priorità
const candidateTokens = [];
if (item.owner_data?.bot_key) {
    candidateTokens.push({ token: item.owner_data.bot_key, source: "owner_custom" });
}
candidateTokens.push({ token: "8644939941:AAHPiZM3D9xg6TbHXGSiCfiXbA4q99fyuYQ", source: "operator_global" });
candidateTokens.push({ token: "8378810625:AAHK3Zya8qFKD4OzFBbwSTOAGolDeY7jiJQ", source: "customer_global" });

// --- 2. LIBRERIA CRIPTOGRAFICA PURE JS (SHA-256 & HMAC) ---
const CryptoJS = (function() {
    function sha256(m) {
        var h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
        var k = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
        var b = Array.from(typeof m === 'string' ? new TextEncoder().encode(m) : m);
        var l = b.length * 8; b.push(0x80);
        while ((b.length * 8) % 512 !== 448) b.push(0);
        for (var i = 7; i >= 0; i--) b.push((l / Math.pow(2, i * 8)) & 0xff);
        for (var i = 0; i < b.length; i += 64) {
            var w = new Int32Array(64);
            for (var j = 0; j < 16; j++) w[j] = (b[i + j * 4] << 24) | (b[i + j * 4 + 1] << 16) | (b[i + j * 4 + 2] << 8) | (b[i + j * 4 + 3]);
            for (var j = 16; j < 64; j++) {
                var s0 = ((w[j - 15] >>> 7) | (w[j - 15] << 25)) ^ ((w[j - 15] >>> 18) | (w[j - 15] << 14)) ^ (w[j - 15] >>> 3);
                var s1 = ((w[j - 2] >>> 17) | (w[j - 2] << 15)) ^ ((w[j - 2] >>> 19) | (w[j - 2] << 13)) ^ (w[j - 2] >>> 10);
                w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
            }
            var [a, c, d, e, f, g, i_h, j_h] = h;
            var v = [...h];
            for (var j = 0; j < 64; j++) {
                var S1 = ((v[4] >>> 6) | (v[4] << 26)) ^ ((v[4] >>> 11) | (v[4] << 21)) ^ ((v[4] >>> 25) | (v[4] << 7));
                var ch = (v[4] & v[5]) ^ (~v[4] & v[6]);
                var t1 = (v[7] + S1 + ch + k[j] + w[j]) | 0;
                var S0 = ((v[0] >>> 2) | (v[0] << 30)) ^ ((v[0] >>> 13) | (v[0] << 19)) ^ ((v[0] >>> 22) | (v[0] << 10));
                var maj = (v[0] & v[1]) ^ (v[0] & v[2]) ^ (v[1] & v[2]);
                var t2 = (S0 + maj) | 0;
                v.unshift((t1 + t2) | 0); v.splice(8); v[4] = (v[4] + t1) | 0;
            }
            for (var j = 0; j < 8; j++) h[j] = (h[j] + v[j]) | 0;
        }
        return h.reduce((acc, val) => acc.concat([(val >>> 24) & 0xff, (val >>> 16) & 0xff, (val >>> 8) & 0xff, val & 0xff]), []);
    }

    if (typeof TextEncoder === "undefined") {
        window.TextEncoder = function() {};
        TextEncoder.prototype.encode = function(s) {
            return new Uint8Array(unescape(encodeURIComponent(s)).split(\"\").map(c => c.charCodeAt(0)));
        };
    }

    return {
        hmac: function(key, message) {
            var k = typeof key === 'string' ? Array.from(new TextEncoder().encode(key)) : key;
            var m = Array.from(new TextEncoder().encode(message));
            var b = 64;
            if (k.length > b) k = sha256(k);
            while (k.length < b) k.push(0);
            var ipad = k.map(x => x ^ 0x36);
            var opad = k.map(x => x ^ 0x5c);
            var inner = sha256(ipad.concat(m));
            return sha256(opad.concat(inner));
        }
    };
})();

// --- 3. LOGICA PARSING ---
const data = {};
initData.split('&').forEach(pair => {
    const [k, v] = pair.split('=');
    data[k] = decodeURIComponent(v || '');
});

const hashReceived = data.hash;
const checkString = Object.keys(data)
    .filter(k => k !== 'hash')
    .sort()
    .map(k => k + '=' + data[k])
    .join('\\n');

// --- 4. CONTROLLO SCADENZA (MAX 1 ORA) ---
const now = Math.floor(Date.now() / 1000);
const authDate = parseInt(data.auth_date) || 0;
const isExpired = (now - authDate) > 3600;

// --- 5. VERIFICA DEI TOKEN IN LOOP ---
let isValid = false;
let isHashValid = false;
let matchedToken = null;
let matchedSource = null;
let computedHash = '';

for (const candidate of candidateTokens) {
    const secretKey = CryptoJS.hmac(\"WebAppData\", candidate.token);
    const computedHashBytes = CryptoJS.hmac(secretKey, checkString);
    const currentHash = computedHashBytes.map(b => b.toString(16).padStart(2, '0')).join('');
    
    if (currentHash === hashReceived) {
        isHashValid = true;
        isValid = !isExpired;
        matchedToken = candidate.token;
        matchedSource = candidate.source;
        computedHash = currentHash;
        break;
    }
    computedHash = currentHash;
}

// --- 6. RISULTATO FINALE ---
return {
    ...item,
    isValid: isValid,
    isExpired: isExpired,
    isHashValid: isHashValid,
    auth_source: matchedSource,
    matched_token: matchedToken ? (matchedToken.substring(0, 10) + \"...\") : null,
    user: data.user ? JSON.parse(data.user) : null,
    auth_date_human: new Date(authDate * 1000).toLocaleString('it-IT'),
    debug: {
        time_diff_seconds: now - authDate,
        computed: computedHash,
        received: hashReceived
    }
};"""

# 2. Rileva i nodi da cancellare
nodes_to_delete = {
    "telegram_validator_owner",
    "telegram_validator",
    "telegram_validator_custom",
    "Is Valid?1",
    "Is Valid?2",
    "Is Valid?3",
    "Merge1"
}

# Modifica nodi
new_nodes = []
for node in data.get('nodes', []):
    name = node.get('name')
    if name == "Validator_unified":
        node['parameters']['jsCode'] = updated_js_code
    
    if name not in nodes_to_delete:
        new_nodes.append(node)

data['nodes'] = new_nodes

# Modifica connessioni: rimuovi i nodi rimossi da tutte le connessioni
new_connections = {}
for source_node, targets in data.get('connections', {}).items():
    if source_node in nodes_to_delete:
        continue
    
    new_targets = {}
    for target_type, paths in targets.items():
        new_paths = []
        for path in paths:
            filtered_path = []
            for connection in path:
                if connection.get('node') not in nodes_to_delete:
                    filtered_path.append(connection)
            if filtered_path:
                new_paths.append(filtered_path)
        if new_paths:
            new_targets[target_type] = new_paths
            
    if new_targets:
        new_connections[source_node] = new_targets

data['connections'] = new_connections

# Salva il file modificato
with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Unified-Authentication.json refactored successfully! Old validator nodes removed and JS logic updated.")
