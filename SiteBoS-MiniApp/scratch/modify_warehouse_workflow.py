import json
import os

filepath = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\intelligence\intelligent_warehouse.json"

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = data.get('nodes', [])

# 1. Definiamo i codici JS aggiornati
ash_decoder_js = """const item = $input.first().json;
const SECRET_KEY = 'TrinAI-Autorize-Transaction-2=2&';

const rawAsh =
  item.ash ||
  item.query?.ash ||
  item.body?.ash ||
  item.body?.web_app_data?.data ||
  item.body?.message?.web_app_data?.data;

if (!rawAsh || typeof rawAsh !== "string") {
  throw new Error("ASH non trovato nell'input.");
}

const [encodedPayload, signatureReceived] = rawAsh.split(".");
if (!encodedPayload || !signatureReceived) {
  throw new Error("Formato ASH non valido.");
}

let decodedPayload;
try {
    decodedPayload = Buffer.from(encodedPayload, "base64").toString("utf8");
} catch (e) {
    throw new Error("Errore decodifica Base64.");
}

function verifySignature(payload, secret, receivedSig) {
    let hash = 0;
    const combined = payload + secret;
    for (let i = 0; i < combined.length; i++) {
        hash = ((hash << 5) - hash) + combined.charCodeAt(i);
        hash = hash & hash; 
    }
    const expectedSig = Math.abs(hash).toString(16);
    return expectedSig === receivedSig;
}

if (!verifySignature(decodedPayload, SECRET_KEY, signatureReceived)) {
    throw new Error("SECURITY: Firma ASH non valida o manomessa. Accesso negato.");
}

const parts = decodedPayload.split("|");
let ids = {};
let role = "";

if (parts.length === 3) {
    // Formato Owner: [chatId, timestamp, webhookId]
    ids = {
        owner_id: parts[0],
        timestamp: parts[1],
        webhook: parts[2]
    };
    role = "owner";
} else if (parts.length === 4) {
    // Formato Operator o Customer: [owner_id, secondary_id, timestamp, webhook]
    ids = {
        owner_id: parts[0],
        secondary_id: parts[1],
        operator: parts[1],
        customer_id: parts[1],
        timestamp: parts[2],
        webhook: parts[3]
    };
    role = "secondary";
} else {
    throw new Error("Struttura interna ASH non supportata.");
}

return [{
    json: {
        ...item,
        ash_valid: true,
        ash_role: role,
        ids: ids
    }
}];"""

telegram_validator_js = """// --- 1. CONFIGURAZIONE ---
const item = $input.first().json;
const initData = item.body?._auth || item.query?._auth || item._auth;

if (!initData) {
    return [{ json: { isValid: false, error: "Dato _auth di Telegram mancante." } }];
}

// Generiamo la lista dei token candidati
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
        for (let i = 7; i >= 0; i--) b.push((l / Math.pow(2, i * 8)) & 0xff);
        for (let i = 0; i < b.length; i += 64) {
            var w = new Int32Array(64);
            for (let j = 0; j < 16; j++) w[j] = (b[i + j * 4] << 24) | (b[i + j * 4 + 1] << 16) | (b[i + j * 4 + 2] << 8) | (b[i + j * 4 + 3]);
            for (let j = 16; j < 64; j++) {
                var s0 = ((w[j - 15] >>> 7) | (w[j - 15] << 25)) ^ ((w[j - 15] >>> 18) | (w[j - 15] << 14)) ^ (w[j - 15] >>> 3);
                var s1 = ((w[j - 2] >>> 17) | (w[j - 2] << 15)) ^ ((w[j - 2] >>> 19) | (w[j - 2] << 13)) ^ (w[j - 2] >>> 10);
                w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
            }
            var v = [...h];
            for (let j = 0; j < 64; j++) {
                var S1 = ((v[4] >>> 6) | (v[4] << 26)) ^ ((v[4] >>> 11) | (v[4] << 21)) ^ ((v[4] >>> 25) | (v[4] << 7));
                var ch = (v[4] & v[5]) ^ (~v[4] & v[6]);
                var t1 = (v[7] + S1 + ch + k[j] + w[j]) | 0;
                var S0 = ((v[0] >>> 2) | (v[0] << 30)) ^ ((v[0] >>> 13) | (v[0] << 19)) ^ ((v[0] >>> 22) | (v[0] << 10));
                var maj = (v[0] & v[1]) ^ (v[0] & v[2]) ^ (v[1] & v[2]);
                var t2 = (S0 + maj) | 0;
                v.unshift((t1 + t2) | 0); v.splice(8); v[4] = (v[4] + t1) | 0;
            }
            for (let j = 0; j < 8; j++) h[j] = (h[j] + v[j]) | 0;
        }
        return h.reduce((acc, val) => acc.concat([(val >>> 24) & 0xff, (val >>> 16) & 0xff, (val >>> 8) & 0xff, val & 0xff]), []);
    }
    if (typeof TextEncoder === "undefined") {
        window.TextEncoder = function() {};
        TextEncoder.prototype.encode = function(s) {
            return new Uint8Array(unescape(encodeURIComponent(s)).split("").map(c => c.charCodeAt(0)));
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
    data[k] = decodeURIComponent(v);
});

const hashReceived = data.hash;
const checkString = Object.keys(data)
    .filter(k => k !== 'hash')
    .sort()
    .map(k => k + '=' + data[k])
    .join('\\n');

// --- 4. CONTROLLO SCADENZA (MAX 1 ORA) ---
const now = Math.floor(Date.now() / 1000);
const authDate = parseInt(data.auth_date);
const isExpired = (now - authDate) > 3600;

// --- 5. TENTATIVI DI CALCOLO HASH TELEGRAM ---
let isValid = false;
let matchedSource = null;
let matchedToken = null;

if (!isExpired) {
    for (const itemToken of candidateTokens) {
        const secretKey = CryptoJS.hmac("WebAppData", itemToken.token);
        const computedHashBytes = CryptoJS.hmac(secretKey, checkString);
        const computedHash = computedHashBytes.map(b => b.toString(16).padStart(2, '0')).join('');
        
        if (computedHash === hashReceived) {
            isValid = true;
            matchedSource = itemToken.source;
            matchedToken = itemToken.token;
            break;
        }
    }
}

return [{
    json: {
        ...item,
        isValid: isValid,
        isExpired: isExpired,
        auth_source: matchedSource,
        matched_token: matchedToken,
        user: data.user ? JSON.parse(data.user) : null,
        auth_date_human: new Date(authDate * 1000).toLocaleString('it-IT')
    }
}];"""

app_url_node = {
  "parameters": {
    "assignments": {
      "assignments": [
        {
          "id": "d14b4715-baea-47c3-ac0b-a151a3b384be",
          "name": "urlMiniApp",
          "value": "={{ \n  (() => {\n    const userId = $json.body?.data?.owner_id || \n                   $json.body?.data?.chat_id || \n                   $json.body?.callback_query?.from?.id || \n                   $json.body?.message?.from?.id ||\n                   $json.body?.owner_id ||\n                   $json.user?.id ||\n                   $json.ids?.owner_id;\n                   \n    // Array degli ID abilitati all'ambiente di test (GitHub Pages)\n    const testers = [\"2041408875\", \"8305126267\"];\n                   \n    return testers.includes(String(userId)) \n      ? \"https://trinaibusinessoperatingsystem.github.io/SiteBoS-MiniApp/telegram_control/\" \n      : \"https://telegram.trinai.it/\";\n  })()\n}}",
          "type": "string"
        }
      ]
    },
    "options": {}
  },
  "type": "n8n-nodes-base.set",
  "typeVersion": 3.4,
  "position": [
    800,
    0
  ],
  "id": "appUrl-node",
  "name": "appUrl"
}

# 2. Aggiorniamo i nodi nel JSON
new_nodes = []
app_url_exists = False

for node in nodes:
    name = node.get('name')
    if name == "Ash Decoder":
        node['parameters']['jsCode'] = ash_decoder_js
        node['position'] = [-200, 0]
    elif name == "Get Owner Data":
        node['position'] = [0, 0]
    elif name == "Merge Owner Data":
        node['position'] = [200, 0]
    elif name == "telegram_validator":
        node['parameters']['jsCode'] = telegram_validator_js
        node['position'] = [400, 0]
    elif name == "Is Valid?":
        node['position'] = [600, 0]
    elif name == "⛔️ 403 Forbidden":
        node['position'] = [600, 180]
    elif name == "Action Router":
        node['position'] = [1000, 0]
    elif name == "appUrl":
        app_url_exists = True
        node['position'] = [800, 0]
        # Aggiorniamo il valore dell'espressione se necessario
        node['parameters'] = app_url_node['parameters']
        
    new_nodes.append(node)

if not app_url_exists:
    new_nodes.append(app_url_node)

data['nodes'] = new_nodes

# 3. Aggiorniamo le connessioni
connections = data.get('connections', {})

# Aggiorniamo Authorize Webhook
if "Authorize Webhook" in connections:
    connections["Authorize Webhook"]["main"] = [
        [{"node": "Ash Decoder", "type": "main", "index": 0}],
        [{"node": "⛔️ 403 Forbidden", "type": "main", "index": 0}]
    ]

# Aggiorniamo Merge Owner Data
if "Merge Owner Data" in connections:
    connections["Merge Owner Data"]["main"] = [
        [{"node": "telegram_validator", "type": "main", "index": 0}]
    ]

# Aggiorniamo telegram_validator
if "telegram_validator" in connections:
    connections["telegram_validator"]["main"] = [
        [{"node": "Is Valid?", "type": "main", "index": 0}]
    ]

# Aggiorniamo Is Valid?
if "Is Valid?" in connections:
    connections["Is Valid?"]["main"] = [
        [{"node": "appUrl", "type": "main", "index": 0}],
        [{"node": "⛔️ 403 Forbidden", "type": "main", "index": 0}]
    ]

# Aggiungiamo appUrl
connections["appUrl"] = {
    "main": [
        [{"node": "Action Router", "type": "main", "index": 0}]
    ]
}

data['connections'] = connections

# Salva il file modificato
with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Workflow intelligent_warehouse.json refactored successfully with Unified Auth and appUrl node!")
