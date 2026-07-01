(function () {
  const countries = [
    ['Австралия', '+61'],
    ['Австрия', '+43'],
    ['Азербайджан', '+994'],
    ['Аландские острова', '+358 18'],
    ['Албания', '+355'],
    ['Алжир', '+213'],
    ['Американское Самоа', '+1 684'],
    ['Ангилья', '+1 264'],
    ['Ангола', '+244'],
    ['Андорра', '+376'],
    ['Антигуа и Барбуда', '+1 268'],
    ['Аргентина', '+54'],
    ['Армения', '+374'],
    ['Аруба', '+297'],
    ['Афганистан', '+93'],
    ['Багамы', '+1 242'],
    ['Бангладеш', '+880'],
    ['Барбадос', '+1 246'],
    ['Бахрейн', '+973'],
    ['Беларусь', '+375'],
    ['Белиз', '+501'],
    ['Бельгия', '+32'],
    ['Бенин', '+229'],
    ['Бермуды', '+1 441'],
    ['Болгария', '+359'],
    ['Боливия', '+591'],
    ['Бонайре, Синт-Эстатиус и Саба', '+599'],
    ['Босния и Герцеговина', '+387'],
    ['Ботсвана', '+267'],
    ['Бразилия', '+55'],
    ['Британские Виргинские острова', '+1 284'],
    ['Бруней', '+673'],
    ['Буркина-Фасо', '+226'],
    ['Бурунди', '+257'],
    ['Бутан', '+975'],
    ['Вануату', '+678'],
    ['Ватикан', '+379'],
    ['Великобритания', '+44'],
    ['Венгрия', '+36'],
    ['Венесуэла', '+58'],
    ['Виргинские острова США', '+1 340'],
    ['Восточный Тимор', '+670'],
    ['Вьетнам', '+84'],
    ['Габон', '+241'],
    ['Гаити', '+509'],
    ['Гайана', '+592'],
    ['Гамбия', '+220'],
    ['Гана', '+233'],
    ['Гваделупа', '+590'],
    ['Гватемала', '+502'],
    ['Гвинея', '+224'],
    ['Гвинея-Бисау', '+245'],
    ['Германия', '+49'],
    ['Гернси', '+44 1481'],
    ['Гибралтар', '+350'],
    ['Гондурас', '+504'],
    ['Гонконг', '+852'],
    ['Гренада', '+1 473'],
    ['Гренландия', '+299'],
    ['Греция', '+30'],
    ['Грузия', '+995'],
    ['Гуам', '+1 671'],
    ['Дания', '+45'],
    ['Джерси', '+44 1534'],
    ['Джибути', '+253'],
    ['Доминика', '+1 767'],
    ['Доминиканская Республика', '+1 809'],
    ['Египет', '+20'],
    ['Замбия', '+260'],
    ['Западная Сахара', '+212'],
    ['Зимбабве', '+263'],
    ['Израиль', '+972'],
    ['Индия', '+91'],
    ['Индонезия', '+62'],
    ['Иордания', '+962'],
    ['Ирак', '+964'],
    ['Иран', '+98'],
    ['Ирландия', '+353'],
    ['Исландия', '+354'],
    ['Испания', '+34'],
    ['Италия', '+39'],
    ['Йемен', '+967'],
    ['Кабо-Верде', '+238'],
    ['Казахстан', '+7'],
    ['Каймановы острова', '+1 345'],
    ['Камбоджа', '+855'],
    ['Камерун', '+237'],
    ['Канада', '+1'],
    ['Катар', '+974'],
    ['Кения', '+254'],
    ['Кипр', '+357'],
    ['Киргизия', '+996'],
    ['Кирибати', '+686'],
    ['Китай', '+86'],
    ['КНДР', '+850'],
    ['Кокосовые острова', '+61 89162'],
    ['Колумбия', '+57'],
    ['Коморы', '+269'],
    ['Конго', '+242'],
    ['Конго, ДР', '+243'],
    ['Коста-Рика', '+506'],
    ['Кот-д’Ивуар', '+225'],
    ['Куба', '+53'],
    ['Кувейт', '+965'],
    ['Кюрасао', '+599'],
    ['Лаос', '+856'],
    ['Латвия', '+371'],
    ['Лесото', '+266'],
    ['Либерия', '+231'],
    ['Ливан', '+961'],
    ['Ливия', '+218'],
    ['Литва', '+370'],
    ['Лихтенштейн', '+423'],
    ['Люксембург', '+352'],
    ['Маврикий', '+230'],
    ['Мавритания', '+222'],
    ['Мадагаскар', '+261'],
    ['Майотта', '+262'],
    ['Макао', '+853'],
    ['Малави', '+265'],
    ['Малайзия', '+60'],
    ['Мали', '+223'],
    ['Мальдивы', '+960'],
    ['Мальта', '+356'],
    ['Марокко', '+212'],
    ['Мартиника', '+596'],
    ['Маршалловы Острова', '+692'],
    ['Мексика', '+52'],
    ['Микронезия', '+691'],
    ['Мозамбик', '+258'],
    ['Молдова', '+373'],
    ['Монако', '+377'],
    ['Монголия', '+976'],
    ['Монтсеррат', '+1 664'],
    ['Мьянма', '+95'],
    ['Намибия', '+264'],
    ['Науру', '+674'],
    ['Непал', '+977'],
    ['Нигер', '+227'],
    ['Нигерия', '+234'],
    ['Нидерланды', '+31'],
    ['Никарагуа', '+505'],
    ['Ниуэ', '+683'],
    ['Новая Зеландия', '+64'],
    ['Новая Каледония', '+687'],
    ['Норвегия', '+47'],
    ['ОАЭ', '+971'],
    ['Оман', '+968'],
    ['Остров Мэн', '+44 1624'],
    ['Остров Рождества', '+61 89164'],
    ['Острова Кука', '+682'],
    ['Пакистан', '+92'],
    ['Палау', '+680'],
    ['Палестина', '+970'],
    ['Панама', '+507'],
    ['Папуа — Новая Гвинея', '+675'],
    ['Парагвай', '+595'],
    ['Перу', '+51'],
    ['Польша', '+48'],
    ['Португалия', '+351'],
    ['Пуэрто-Рико', '+1 787'],
    ['Реюньон', '+262'],
    ['Россия', '+7'],
    ['Руанда', '+250'],
    ['Румыния', '+40'],
    ['Сальвадор', '+503'],
    ['Самоа', '+685'],
    ['Сан-Марино', '+378'],
    ['Сан-Томе и Принсипи', '+239'],
    ['Саудовская Аравия', '+966'],
    ['Северная Македония', '+389'],
    ['Северные Марианские острова', '+1 670'],
    ['Сейшелы', '+248'],
    ['Сен-Бартелеми', '+590'],
    ['Сенегал', '+221'],
    ['Сен-Мартен', '+590'],
    ['Сен-Пьер и Микелон', '+508'],
    ['Сент-Винсент и Гренадины', '+1 784'],
    ['Сент-Китс и Невис', '+1 869'],
    ['Сент-Люсия', '+1 758'],
    ['Сербия', '+381'],
    ['Сингапур', '+65'],
    ['Синт-Мартен', '+1 721'],
    ['Сирия', '+963'],
    ['Словакия', '+421'],
    ['Словения', '+386'],
    ['Соломоновы Острова', '+677'],
    ['Сомали', '+252'],
    ['Судан', '+249'],
    ['Суринам', '+597'],
    ['США', '+1'],
    ['Сьерра-Леоне', '+232'],
    ['Таджикистан', '+992'],
    ['Таиланд', '+66'],
    ['Тайвань', '+886'],
    ['Танзания', '+255'],
    ['Тёркс и Кайкос', '+1 649'],
    ['Того', '+228'],
    ['Токелау', '+690'],
    ['Тонга', '+676'],
    ['Тринидад и Тобаго', '+1 868'],
    ['Тувалу', '+688'],
    ['Тунис', '+216'],
    ['Туркменистан', '+993'],
    ['Турция', '+90'],
    ['Уганда', '+256'],
    ['Узбекистан', '+998'],
    ['Украина', '+380'],
    ['Уоллис и Футуна', '+681'],
    ['Уругвай', '+598'],
    ['Фарерские острова', '+298'],
    ['Фиджи', '+679'],
    ['Филиппины', '+63'],
    ['Финляндия', '+358'],
    ['Фолклендские острова', '+500'],
    ['Франция', '+33'],
    ['Французская Гвиана', '+594'],
    ['Французская Полинезия', '+689'],
    ['Хорватия', '+385'],
    ['ЦАР', '+236'],
    ['Чад', '+235'],
    ['Черногория', '+382'],
    ['Чехия', '+420'],
    ['Чили', '+56'],
    ['Швейцария', '+41'],
    ['Швеция', '+46'],
    ['Шри-Ланка', '+94'],
    ['Эквадор', '+593'],
    ['Экваториальная Гвинея', '+240'],
    ['Эритрея', '+291'],
    ['Эсватини', '+268'],
    ['Эстония', '+372'],
    ['Эфиопия', '+251'],
    ['ЮАР', '+27'],
    ['Южная Корея', '+82'],
    ['Южный Судан', '+211'],
    ['Ямайка', '+1 876'],
    ['Япония', '+81']
  ];

  function injectStyles() {
    if (document.getElementById('latam-phone-code-styles')) return;
    const style = document.createElement('style');
    style.id = 'latam-phone-code-styles';
    style.textContent = `
      .latam-phone{display:grid;grid-template-columns:minmax(172px,0.86fr) minmax(0,1fr);gap:10px;width:100%;}
      .latam-phone select,.latam-phone input{min-width:0;}
      .latam-country-code{width:100%;border:1px solid var(--line,rgba(201,161,76,0.18));background:rgba(255,255,255,0.035);color:var(--cream,#f5f0e6);font-family:var(--font-body,Montserrat,sans-serif);font-size:13px;line-height:1.4;padding:14px 12px;outline:none;border-radius:0;appearance:auto;}
      .latam-country-code:focus{border-color:var(--gold,#c9a14c);background:rgba(201,161,76,0.06);}
      .latam-country-code option{background:#0a0a0a;color:#f5f0e6;}
      .mini-form-fields .latam-phone{flex:1 1 360px;}
      .mini-form-fields .latam-phone input{width:100%;}
      .field.has-phone-code,.form-group.has-phone-code{min-width:0;}
      .messengers .field.has-phone-code{grid-column:1/-1;}
      .field .latam-phone,.form-group .latam-phone{margin-top:0;}
      @media (max-width:700px){.latam-phone{grid-template-columns:1fr;gap:8px;}.latam-country-code{font-size:16px;padding:14px 16px;}}
    `;
    document.head.appendChild(style);
  }

  function defaultCountry() {
    const lang = (navigator.language || '').toLowerCase();
    if (lang.includes('pt-br')) return 'Бразилия';
    if (lang.includes('en-us')) return 'США';
    if (lang.includes('uk')) return 'Украина';
    if (lang.includes('kk')) return 'Казахстан';
    return 'Россия';
  }

  function buildSelect(selectedName) {
    const select = document.createElement('select');
    select.className = 'latam-country-code';
    select.setAttribute('aria-label', 'Код страны');
    countries.forEach(([name, code]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${name} ${code}`;
      option.dataset.country = name;
      if (name === selectedName) option.selected = true;
      select.appendChild(option);
    });
    return select;
  }

  function splitExistingValue(input, select) {
    const value = input.value.trim();
    if (!value.startsWith('+')) return;
    const compact = value.replace(/[^\d+]/g, '');
    const match = countries
      .map(([name, code]) => ({ name, code, compact: code.replace(/[^\d+]/g, '') }))
      .filter((entry) => compact.startsWith(entry.compact))
      .sort((a, b) => b.compact.length - a.compact.length)[0];
    if (!match) return;
    const option = Array.from(select.options).find((item) => item.value === match.code && item.dataset.country === match.name);
    if (option) option.selected = true;
    input.value = value.slice(match.code.length).trim();
  }

  function enhanceInput(input) {
    if (!input || input.dataset.countryCodeEnhanced === 'true') return;
    input.dataset.countryCodeEnhanced = 'true';
    input.type = 'tel';
    input.autocomplete = 'tel-national';
    input.placeholder = input.placeholder && input.placeholder.includes('@') ? input.placeholder : 'Номер без кода';

    const select = buildSelect(defaultCountry());
    const wrapper = document.createElement('div');
    wrapper.className = 'latam-phone';
    if (input.parentElement) input.parentElement.classList.add('has-phone-code');
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(select);
    wrapper.appendChild(input);
    splitExistingValue(input, select);
  }

  function prepareForm(form) {
    if (!form || form.dataset.countryCodePrepared === 'true') return;
    form.dataset.countryCodePrepared = 'true';
    form.addEventListener('submit', () => {
      form.querySelectorAll('.latam-phone').forEach((wrapper) => {
        const select = wrapper.querySelector('select');
        const input = wrapper.querySelector('input');
        if (!select || !input) return;
        const local = input.value.trim();
        if (!local || local.startsWith('+')) return;
        input.value = `${select.value} ${local}`;
      });
    }, true);
  }

  function initPhoneCountryCodes() {
    injectStyles();
    const inputs = Array.from(document.querySelectorAll('input[type="tel"], input[data-phone-code], #partnerWhatsapp'));
    inputs.forEach(enhanceInput);
    document.querySelectorAll('form').forEach(prepareForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhoneCountryCodes);
  } else {
    initPhoneCountryCodes();
  }
})();
