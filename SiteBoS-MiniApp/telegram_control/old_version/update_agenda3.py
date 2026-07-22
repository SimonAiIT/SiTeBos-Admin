import re
import os

file_path = r'c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\operativita\agenda.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Header
content = re.sub(
    r'<header class="flex justify-between items-center pt-2">\s*<h1.*?</h1>\s*<div class="flex gap-2">',
    '''<header class="flex justify-between items-center pt-2">
        <div>
            <h1 class="text-2xl font-black tracking-tighter uppercase leading-none">⏳ Agenda</h1>
            <button onclick="openView('calendars')" class="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1 flex items-center gap-1 active:scale-95 transition">
                <span id="active-calendar-color" class="w-2 h-2 rounded-full bg-black inline-block"></span>
                <span id="active-calendar-name">Personale</span>
                <i class="fas fa-chevron-down ml-1"></i>
            </button>
        </div>
        <div class="flex gap-2">''',
    content, flags=re.DOTALL
)

# 2. Add SCREEN G: CALENDARS before SCREEN E
calendars_html = '''  <!-- SCREEN G: CALENDARS -->
  <div id="screen-calendars" class="view-overlay flex flex-col p-6">
    <header class="flex justify-between items-center mb-8">
        <button onclick="closeView()" class="w-10 h-10 flex items-center justify-center"><i class="fas fa-arrow-left"></i></button>
        <h2 class="text-sm font-black uppercase tracking-widest">I Tuoi Calendari</h2>
        <div class="w-10"></div>
    </header>

    <div class="flex-1 space-y-4" id="calendars-list">
        <!-- Lista calendari generata via JS -->
    </div>

    <div class="space-y-4 mb-6">
        <div class="border-t border-border pt-4">
            <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Nuovo Calendario</p>
            <input type="text" id="new-calendar-name" class="w-full bg-white border border-border rounded-xl p-4 text-xs font-medium outline-none focus:border-black transition-colors mb-3" placeholder="Nome (es. Marketing, Team...)">
            <button onclick="createCalendar()" class="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-sm">
                <i class="fas fa-plus"></i> Aggiungi
            </button>
        </div>
    </div>
  </div>

  <!-- SCREEN E: WEEK VIEW -->'''

content = content.replace('  <!-- SCREEN E: WEEK VIEW -->', calendars_html)

# 3. Add Calendar and Notify select to revision card
content = re.sub(
    r'<div class="space-y-1 flex-1">\s*<label class="text-\[8px\] font-black uppercase tracking-widest text-gray-400">Note</label>\s*<textarea class="field-notes w-full h-20 bg-gray-50 p-3 rounded-xl text-xs font-medium outline-none border border-transparent focus:border-black resize-none" placeholder="Aggiungi dettagli\.\.\."></textarea>\s*</div>\s*</div>\s*</div>\s*</template>',
    '''<div class="space-y-1 flex-1">
                <label class="text-[8px] font-black uppercase tracking-widest text-gray-400">Note</label>
                <textarea class="field-notes w-full h-16 bg-gray-50 p-3 rounded-xl text-xs font-medium outline-none border border-transparent focus:border-black resize-none" placeholder="Aggiungi dettagli..."></textarea>
            </div>

            <!-- Blocco Notifiche e Multi-Calendario -->
            <div class="grid grid-cols-2 gap-3 border-t border-gray-100 pt-3">
                <div class="space-y-1">
                    <label class="text-[8px] font-black uppercase tracking-widest text-gray-400">Calendario</label>
                    <select class="field-calendar_id w-full bg-gray-50 p-3 rounded-xl text-[10px] font-bold outline-none border border-transparent focus:border-black">
                        <!-- Popolato dinamicamente da JS -->
                    </select>
                </div>
                <div class="space-y-1">
                    <label class="text-[8px] font-black uppercase tracking-widest text-gray-400">Avviso Bot</label>
                    <select class="field-notify_minutes w-full bg-gray-50 p-3 rounded-xl text-[10px] font-bold outline-none border border-transparent focus:border-black">
                        <option value="none">Nessuna</option>
                        <option value="0">All'ora esatta</option>
                        <option value="15" selected>15 min prima</option>
                        <option value="30">30 min prima</option>
                        <option value="60">1 ora prima</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  </template>''',
    content, flags=re.DOTALL
)

# 4. Update JS State
content = re.sub(
    r'// STATE\s*let allEvents = \[\];\s*let draftEvents = \[\];\s*let currentViewStack = \[\];\s*let currentWeekOffset = 0;\s*let carouselIndex = 0;',
    '''// STATE
    let allEvents = [];
    let draftEvents = [];
    let currentViewStack = [];
    let currentWeekOffset = 0;
    let carouselIndex = 0;
    
    // Multi-tenant Calendars
    let calendars = [
        { id: 'default', name: 'Personale', color: '#000000' }
    ];
    let activeCalendarId = 'default';''',
    content, flags=re.DOTALL
)

# 5. Update init()
content = re.sub(
    r'function init\(\) \{.*?(?=function updateTodayLabel)',
    '''async function init() {
        if (!ash) {
            document.body.innerHTML = `<div class="h-full flex items-center justify-center font-black text-red-500">ASH MISSING</div>`;
            return;
        }
        
        tg.BackButton.onClick(() => closeView());
        updateTodayLabel();
        
        await loadCalendars();
        await loadInitialData();
    }

    async function loadCalendars() {
        const data = await apiCall('agenda_get_calendars', {});
        if (data && data.calendars && data.calendars.length > 0) {
            calendars = data.calendars;
        }
        if (!calendars.find(c => c.id === activeCalendarId)) {
            activeCalendarId = calendars[0].id;
        }
        updateActiveCalendarUI();
    }

    function updateActiveCalendarUI() {
        const cal = calendars.find(c => c.id === activeCalendarId) || calendars[0];
        document.getElementById('active-calendar-name').innerText = cal.name;
        document.getElementById('active-calendar-color').style.backgroundColor = cal.color || '#000000';
    }

    function renderCalendarsList() {
        const list = document.getElementById('calendars-list');
        list.innerHTML = calendars.map(c => `
            <div onclick="selectCalendar('${c.id}')" class="p-4 rounded-2xl border ${c.id === activeCalendarId ? 'border-black bg-gray-50' : 'border-border bg-white'} flex justify-between items-center cursor-pointer transition active:scale-95 mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-3 h-3 rounded-full" style="background-color: ${c.color || '#000000'}"></div>
                    <span class="text-xs font-bold">${c.name}</span>
                </div>
                ${c.id === activeCalendarId ? '<i class="fas fa-check text-black"></i>' : ''}
            </div>
        `).join('');
    }

    function selectCalendar(id) {
        activeCalendarId = id;
        updateActiveCalendarUI();
        renderCalendarsList();
        closeView();
        loadInitialData();
    }

    async function createCalendar() {
        const input = document.getElementById('new-calendar-name');
        const name = input.value.trim();
        if (!name) return;

        const data = await apiCall('agenda_create_calendar', { name });
        if (data && data.calendar) {
            calendars.push(data.calendar);
        } else {
            // Mock mode if backend not ready
            const newCal = { id: 'cal_' + Date.now(), name, color: '#' + Math.floor(Math.random()*16777215).toString(16) };
            calendars.push(newCal);
        }
        input.value = '';
        renderCalendarsList();
        if(tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
    }

    ''',
    content, flags=re.DOTALL
)

# 6. Update openView
content = re.sub(
    r'if \(viewId === \'week\'\) renderWeekView\(\);\s*\}',
    '''if (viewId === 'week') renderWeekView();
        if (viewId === 'calendars') renderCalendarsList();
    }''',
    content, flags=re.DOTALL
)

# 7. Update loadInitialData
content = re.sub(
    r'async function loadInitialData\(\) \{.*?renderTodayEvents\(\);\s*\}\s*\}',
    '''async function loadInitialData() {
        const data = await apiCall('agenda_get', { date_range: 'today_tomorrow', calendar_id: activeCalendarId });
        if (data && data.events) {
            allEvents = data.events;
        } else {
            allEvents = [];
        }
        renderTodayEvents();
    }''',
    content, flags=re.DOTALL
)

# 8. Update renderRevisionCarousel defaults
content = re.sub(
    r'card\.querySelector\(\'\.field-notes\'\)\.value = ev\.notes \|\| \'\';\s*card\.querySelector\(\'\.scarta-btn\'\)\.onclick = \(\) => scartaDraft\(idx\);',
    '''card.querySelector('.field-notes').value = ev.notes || '';
            
            const calSelect = card.querySelector('.field-calendar_id');
            if (calSelect) {
                calSelect.innerHTML = calendars.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
                calSelect.value = ev.calendar_id || activeCalendarId;
            }
            const notifySelect = card.querySelector('.field-notify_minutes');
            if (notifySelect) {
                notifySelect.value = ev.notify_minutes !== undefined ? ev.notify_minutes : '15';
            }

            card.querySelector('.scarta-btn').onclick = () => scartaDraft(idx);''',
    content, flags=re.DOTALL
)

# 9. Update input sync state
content = re.sub(
    r'input\.onchange = \(e\) => \{\s*const field = e\.target\.className\.split\(\'-\'\)\.pop\(\);\s*draftEvents\[idx\]\[field\] = e\.target\.value;\s*\};',
    '''input.onchange = (e) => {
                    const match = e.target.className.match(/field-([a-zA-Z_]+)/);
                    if (match && match[1]) {
                        draftEvents[idx][match[1]] = e.target.value;
                    }
                };''',
    content, flags=re.DOTALL
)

# 10. openManualAdd
content = re.sub(
    r'notes: \'\',\s*source: \'MANUAL\'',
    '''notes: '',
            calendar_id: activeCalendarId,
            notify_minutes: '15',
            source: 'MANUAL' '''.strip(),
    content, flags=re.DOTALL
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
