// Ideas for your area (choice board).
// To edit an area, change its entry in AREAS below. Each idea links to a tile:
// t1 Gemini, t2 Quiz, t3 Presentation, t4 Video, t5 Passage, t6 Flashcards.
(function () {
  var TILE = {
    t1: 'Tile 01 · Gemini', t2: 'Tile 02 · Quiz', t3: 'Tile 03 · Presentation',
    t4: 'Tile 04 · Video', t5: 'Tile 05 · Passage', t6: 'Tile 06 · Flashcards'
  };

  var GROUPS = [
    ['English, maths and language', ['english', 'maths', 'fs', 'esol']],
    ['Academic and adult learning', ['alevels', 'access', 'science', 'education', 'community']],
    ['Business, digital and creative', ['business', 'computing', 'creative', 'travel']],
    ['Technical and trades', ['engineering', 'construction', 'conman', 'buildserv', 'automotive']],
    ['Services, care and sport', ['hair', 'beauty', 'hospitality', 'earlyyears', 'hsc', 'sports', 'uniform']],
    ['Not listed', ['other']]
  ];

  var AREAS = {
    english: {
      name: 'English',
      ideas: [
        ['Passage', 't5', 'A short non-fiction extract (a news article or a letter) with questions on inference and the writer’s purpose.'],
        ['Categorise', 't2', 'Sort statements from a text into <strong>fact</strong> or <strong>opinion</strong>.'],
        ['Open-ended', 't2', 'Rewrite an informal sentence in a formal register, then show the answers anonymously and discuss.']
      ],
      prompt: 'Create 10 questions for post-16 GCSE English Language resit learners on identifying language techniques and the writer’s viewpoint in a non-fiction extract.',
      search: 'GCSE English language non-fiction',
      tools: 'Switch on <strong>read aloud</strong>, <strong>dyslexia font</strong> and the <strong>bilingual dictionary</strong> as accommodations for learners who need them. Passages keep the text and questions side by side, so learners can refer back while they answer.'
    },
    maths: {
      name: 'Maths',
      ideas: [
        ['Fill in the blank', 't2', 'Numeric answers, such as the price of a £40 item with 15% off. Add every acceptable form of the answer (34 and 34.00).'],
        ['Hotspot', 't2', 'Upload a graph or chart and ask learners to click the point that shows a value, such as the highest month or where two lines cross.'],
        ['Reorder', 't2', 'Put the steps for solving a linear equation in the right order.'],
        ['Draw', 't2', 'Learners show their working or sketch a shape, so you see the method, not just the answer.']
      ],
      prompt: 'Create 10 questions for post-16 GCSE Maths resit learners on percentages and ratio in real-life contexts such as wages, discounts and recipes. Include the working in the explanation.',
      search: 'GCSE maths percentages',
      tools: '<strong>Built-in calculators:</strong> switch on the <strong>Desmos scientific</strong>, <strong>Desmos graphing</strong> or <strong>four-function calculator</strong> for the learners who need one, in Accommodations. Prefer Google? <strong>Practice Sets</strong> in Classroom have a maths keyboard for typing answers, and show the hints you add when learners get stuck.'
    },
    fs: {
      name: 'Functional Skills & Gap',
      ideas: [
        ['Fill in the blank', 't2', 'Everyday money: how much change from £20, or the cost of three items.'],
        ['Match', 't2', 'Match commonly misspelled words to their correct spelling, or words to their meanings.'],
        ['Reorder', 't2', 'Put the sentences of a short email in a sensible order.']
      ],
      prompt: 'Create 10 Functional Skills Maths Level 1 questions on money and time in everyday situations such as shopping, bus timetables and wages.',
      search: 'functional skills maths level 1',
      tools: 'Use <strong>reduce answer choices</strong>, <strong>extra time</strong> and <strong>read aloud</strong> for learners with access arrangements. Turn off the <strong>leaderboard</strong> so nobody is ranked in front of the group.'
    },
    esol: {
      name: 'ESOL',
      ideas: [
        ['Flashcards', 't6', 'Everyday vocabulary with a photo on every card, such as food, transport or parts of the body.'],
        ['Match', 't2', 'Match a word to its picture, or a question to its answer (“Where do you live?” → “I live in Wolverhampton”).'],
        ['Passage', 't5', 'A short real-life text, such as a doctor’s appointment letter or a bus timetable, with simple comprehension questions.']
      ],
      prompt: 'Create 10 questions for Entry Level 2 ESOL learners on making a doctor’s appointment, using short, simple sentences.',
      search: 'ESOL entry level vocabulary',
      tools: 'Switch on <strong>translate</strong>, the <strong>bilingual dictionary</strong> and <strong>read aloud</strong> as accommodations. <strong>Speech to text</strong> lets learners answer by speaking. Questions with images help learners who are still building their reading.'
    },
    alevels: {
      name: 'A Levels',
      ideas: [
        ['From a past paper', 't2', 'Upload a past paper or a worksheet (<span class="path">Generate with AI → Document</span>) and Wayground turns it into an assessment you can edit.'],
        ['Passage', 't5', 'A source or an extract with evaluation questions, for example on reliability, bias or interpretation.'],
        ['Categorise', 't2', 'Sort key evidence into for and against an argument.']
      ],
      prompt: 'Create 10 A Level questions on [your topic] that test application and evaluation, not just recall. Include one extended-response question.',
      search: 'A level [your subject]',
      tools: 'Use <strong>focus mode</strong> for timed practice under exam-style conditions. The report’s <strong>question-by-question breakdown</strong> shows which topics to revisit before mocks.'
    },
    access: {
      name: 'Access to HE',
      ideas: [
        ['Passage', 't5', 'An extract from an academic article with questions on the argument, the evidence and how to reference it.'],
        ['Open-ended', 't2', 'Evaluate a claim in two or three sentences: a short practice run for essay writing.'],
        ['Flashcards', 't6', 'Key subject terms and study skills vocabulary, such as “evaluate”, “critically analyse” and “synthesise”.']
      ],
      prompt: 'Create 10 questions for Access to HE learners on academic study skills: referencing, paraphrasing and the meaning of command words in assignment briefs.',
      search: 'academic writing referencing',
      tools: 'Assign activities for independent study with an <strong>extended deadline</strong> for learners balancing work and family. <strong>Read aloud</strong> helps with long academic texts.'
    },
    science: {
      name: 'Science',
      ideas: [
        ['Hotspot', 't2', 'Upload a labelled diagram, such as a cell, the heart or a circuit, and ask learners to click a named part.'],
        ['Reorder', 't2', 'Put the steps of a required practical method in the right order.'],
        ['Fill in the blank', 't2', 'A calculation with units, such as speed = distance ÷ time.']
      ],
      prompt: 'Create 10 questions for post-16 science learners on cell structure and function, including two questions that use a labelled diagram.',
      search: 'cell structure',
      tools: 'Switch on the <strong>Desmos scientific calculator</strong> for calculation questions. Diagram-based questions such as Hotspot give learners with lower reading confidence a way in.'
    },
    education: {
      name: 'Education',
      ideas: [
        ['Passage', 't5', 'A classroom case study about a learner who needs support, with questions on which reasonable adjustment would help.'],
        ['Categorise', 't2', 'Sort assessment methods into <strong>formative</strong> or <strong>summative</strong>.'],
        ['Open-ended', 't2', 'Reflect on a teaching scenario: what would you do next, and why?']
      ],
      prompt: 'Create 10 questions for trainee teaching assistants on assessment for learning strategies and when to use them.',
      search: 'assessment for learning',
      tools: 'Use the activity as a model: trainees take part as learners, then look at the report together and discuss what it tells the teacher.'
    },
    community: {
      name: 'Community Provision',
      ideas: [
        ['Poll', 't3', 'A no-wrong-answer warm-up to start a session and get everyone involved.'],
        ['Flashcards', 't6', 'Key words for the course, each with a picture, for learners to revise at home.'],
        ['Presentation', 't3', 'Your existing slides with two or three low-stakes questions between them.']
      ],
      prompt: 'Create 8 simple questions for adult community learners on [your course topic], using plain English and short sentences.',
      search: '[your course topic]',
      tools: 'Turn off the <strong>leaderboard</strong> and <strong>sound effects</strong> so it feels relaxed. Use a larger <strong>font size</strong> and <strong>read aloud</strong>. No devices in the room? Use <strong>Download as worksheet</strong> and print it.'
    },
    business: {
      name: 'Business',
      ideas: [
        ['Categorise', 't2', 'Sort business costs into <strong>fixed</strong> or <strong>variable</strong>.'],
        ['Passage', 't5', 'A short case study of a local business with questions on its marketing or finance decisions.'],
        ['Fill in the blank', 't2', 'Calculate the break-even point or a profit margin.']
      ],
      prompt: 'Create 10 questions for Level 3 Business learners on break-even analysis, using a small local business as the example.',
      search: 'break even analysis',
      tools: 'Use the <strong>Desmos scientific calculator</strong> for finance calculations. The report shows which learners can apply the formula and which only recognise it.'
    },
    computing: {
      name: 'Computing',
      ideas: [
        ['Reorder', 't2', 'Put the steps of an algorithm, or lines of code, in the right order.'],
        ['Match', 't2', 'Match cyber security terms to their definitions, such as phishing, malware and two-factor authentication.'],
        ['Hotspot', 't2', 'Upload a photo of a motherboard or a network diagram and ask learners to click a named component.']
      ],
      prompt: 'Create 10 questions for Level 2 IT learners on cyber security threats and how to protect against them.',
      search: 'cyber security',
      tools: 'The <strong>Digital Footprint demo deck</strong> from the session works well as a starter for online safety units.'
    },
    creative: {
      name: 'Creative',
      ideas: [
        ['Hotspot', 't2', 'Upload an image or film still and ask learners to click the focal point, or where the rule of thirds lines fall.'],
        ['Draw', 't2', 'Sketch a quick thumbnail layout or a storyboard frame.'],
        ['Video', 't4', 'A short clip with pause questions on camera angle, editing, lighting or performance.']
      ],
      prompt: 'Create 10 questions for Level 3 Creative Media learners on camera shots, angles and movement, and the effect each creates.',
      search: 'camera shots and angles',
      tools: '<strong>Draw</strong> and image-based questions let learners respond visually, which suits creative subjects and learners who find writing harder.'
    },
    travel: {
      name: 'Travel and Tourism',
      ideas: [
        ['Hotspot', 't2', 'Upload a map and ask learners to click a destination, region or airport.'],
        ['Categorise', 't2', 'Sort holidays into types of tourism: leisure, business, adventure or visiting friends and relatives.'],
        ['Passage', 't5', 'A customer complaint email with questions on how to respond.']
      ],
      prompt: 'Create 10 questions for Level 2 Travel and Tourism learners on types of tourism and UK tourist destinations.',
      search: 'travel and tourism destinations',
      tools: '<strong>English and maths link:</strong> add time-zone and currency conversion questions, with the <strong>four-function calculator</strong> switched on.'
    },
    engineering: {
      name: 'Engineering',
      ideas: [
        ['Hotspot', 't2', 'Upload a technical drawing or a photo of a machine and ask learners to click a named component.'],
        ['Fill in the blank', 't2', 'A calculation, such as Ohm’s law (V = I × R) or a unit conversion.'],
        ['Reorder', 't2', 'Put the steps of a workshop procedure in the right order, including the safety checks.']
      ],
      prompt: 'Create 10 questions for Level 2 Engineering learners on workshop health and safety and the correct use of hand tools.',
      search: 'engineering workshop safety',
      tools: 'Switch on the <strong>Desmos scientific calculator</strong> for calculations. Photos of real kit from your own workshop make the questions instantly relevant.'
    },
    construction: {
      name: 'Construction',
      ideas: [
        ['Hotspot', 't2', 'Upload a photo of a building site and ask learners to click the hazard.'],
        ['Flashcards', 't6', 'Name the tool or material from a photo.'],
        ['Fill in the blank', 't2', 'Work out how many bricks or how much material is needed for a given wall area.']
      ],
      prompt: 'Create 10 questions for Level 1 Construction learners on identifying hazards on a building site and the PPE needed.',
      search: 'construction site safety',
      tools: '<strong>English and maths link:</strong> area, perimeter and quantity calculations, with the <strong>four-function calculator</strong> switched on.'
    },
    conman: {
      name: 'Construction Management',
      ideas: [
        ['Passage', 't5', 'An extract from the CDM Regulations with questions on duty holders’ responsibilities.'],
        ['Reorder', 't2', 'Put the stages of a construction project in order, from brief to handover.'],
        ['Categorise', 't2', 'Sort responsibilities by duty holder: client, principal designer or principal contractor.']
      ],
      prompt: 'Create 10 questions for Level 3 Construction Management learners on the CDM Regulations and the roles of each duty holder.',
      search: 'CDM regulations',
      tools: 'Assign as independent study before a session, then use the report to decide what to teach rather than re-teaching what the group already knows.'
    },
    buildserv: {
      name: 'Building Services',
      ideas: [
        ['Reorder', 't2', 'Put the steps of a safe isolation procedure in the right order.'],
        ['Hotspot', 't2', 'Upload a photo of a pipework or wiring installation and ask learners to click the fault or a named fitting.'],
        ['Flashcards', 't6', 'Identify fittings, components and tools from photos.']
      ],
      prompt: 'Create 10 questions for Level 2 Electrical Installation learners on the safe isolation procedure and the test equipment used.',
      search: 'safe isolation',
      tools: 'Switch on the <strong>Desmos scientific calculator</strong> for questions on Ohm’s law or pipe sizing.'
    },
    automotive: {
      name: 'Automotive',
      ideas: [
        ['Hotspot', 't2', 'Upload a photo of an engine bay and ask learners to click a named component.'],
        ['Reorder', 't2', 'Put the steps of a wheel change, including the torque check, in the right order.'],
        ['Video', 't4', 'A diagnostic or repair clip with pause questions: what would you check next?']
      ],
      prompt: 'Create 10 questions for Level 2 Light Vehicle Maintenance learners on routine vehicle checks and the components under the bonnet.',
      search: 'vehicle maintenance',
      tools: 'Photos taken in your own workshop make the best Hotspot images. <strong>English and maths link:</strong> tyre pressures, torque settings and unit conversions.'
    },
    hair: {
      name: 'Hair',
      ideas: [
        ['Hotspot', 't2', 'Upload a head diagram and ask learners to click the section they would start a graduated bob from.'],
        ['Reorder', 't2', 'Put the steps of a colour application in the right order.'],
        ['Flashcards', 't6', 'Name the tool or product from a photo.'],
        ['Passage', 't5', 'A client consultation record with questions: spot the contraindication.']
      ],
      prompt: 'Create 10 questions for Level 2 Hairdressing learners on client consultation, hair and scalp analysis and contraindications.',
      search: 'hairdressing consultation',
      tools: 'Image-based questions suit a practical subject and learners with lower reading confidence. <strong>English and maths link:</strong> mixing ratios for colour.'
    },
    beauty: {
      name: 'Beauty',
      ideas: [
        ['Categorise', 't2', 'Sort contraindications into those that <strong>prevent</strong> a treatment and those that <strong>restrict</strong> it.'],
        ['Reorder', 't2', 'Put the steps of a manicure or facial in the right order.'],
        ['Hotspot', 't2', 'Upload a diagram of the face, skin or nail and ask learners to click a named structure.']
      ],
      prompt: 'Create 10 questions for Level 2 Beauty Therapy learners on contraindications to facial treatments and skin types.',
      search: 'beauty therapy skin types',
      tools: '<strong>Flashcards</strong> with photos work well for skin types and conditions. Learners can revise them on their phones.'
    },
    hospitality: {
      name: 'Hospitality',
      ideas: [
        ['Categorise', 't2', 'Sort dishes by the allergens they contain, or sort foods into the right storage area.'],
        ['Reorder', 't2', 'Put the steps of a table service, or of preparing a dish, in the right order.'],
        ['Fill in the blank', 't2', 'Scale a recipe for 4 people up to 20.']
      ],
      prompt: 'Create 10 questions for Level 1 Hospitality and Catering learners on the 14 allergens and safe food storage.',
      search: 'food hygiene allergens',
      tools: '<strong>English and maths link:</strong> recipe scaling, costing and weights, with the <strong>four-function calculator</strong> switched on.'
    },
    earlyyears: {
      name: 'Early Years',
      ideas: [
        ['Passage', 't5', 'A short child observation, with questions on which developmental stage it shows.'],
        ['Categorise', 't2', 'Sort EYFS areas of learning into <strong>prime</strong> or <strong>specific</strong> areas.'],
        ['Reorder', 't2', 'Put the steps of a care routine, such as handwashing, in the right order.']
      ],
      prompt: 'Create 10 questions for Level 3 Early Years learners on the EYFS areas of learning and development.',
      search: 'EYFS areas of learning',
      tools: 'Scenario-based questions in a Passage mirror how learners are assessed on placement.'
    },
    hsc: {
      name: 'Health & Social Care',
      ideas: [
        ['Passage', 't5', 'A care scenario with questions on what to do next, including when to raise a safeguarding concern.'],
        ['Match', 't2', 'Match care values to real examples from practice.'],
        ['Reorder', 't2', 'Put the steps of effective hand hygiene in the right order.']
      ],
      prompt: 'Create 10 questions for Level 2 Health and Social Care learners on care values and person-centred practice.',
      search: 'health and social care values',
      tools: 'Use <strong>open-ended</strong> questions shown anonymously to discuss scenarios, so learners can share views without being put on the spot.'
    },
    sports: {
      name: 'Sports',
      ideas: [
        ['Hotspot', 't2', 'Upload a body diagram and ask learners to click a named muscle or bone.'],
        ['Reorder', 't2', 'Put the phases of a warm-up in the right order.'],
        ['Video', 't4', 'A technique clip with pause questions: what is the athlete doing well, and what would you coach?']
      ],
      prompt: 'Create 10 questions for Level 3 Sport learners on the major muscles and bones of the skeletal and muscular systems.',
      search: 'muscular system',
      tools: '<strong>English and maths link:</strong> heart rate zones and fitness test calculations, with the <strong>four-function calculator</strong> switched on.'
    },
    uniform: {
      name: 'Uniform and Public Services',
      ideas: [
        ['Video', 't4', 'An incident scenario clip with pause questions: what would you do next?'],
        ['Reorder', 't2', 'Put the steps of a first aid primary survey in the right order.'],
        ['Match', 't2', 'Match letters to the phonetic alphabet (A = Alpha, B = Bravo).']
      ],
      prompt: 'Create 10 questions for Level 2 Public Services learners on the roles of the different emergency services and how they work together.',
      search: 'public services emergency services',
      tools: 'Quick-fire rounds with the <strong>leaderboard</strong> on can suit this group. Turn it off for learners who find competition stressful.'
    },
    other: {
      name: 'My area isn’t listed',
      ideas: [
        ['Poll', 't3', 'Open your next lesson with a no-wrong-answer question to see what the group already knows.'],
        ['Flashcards', 't6', 'The ten key terms for your current unit.'],
        ['Reorder', 't2', 'Any process or procedure from your subject, put in the right order.']
      ],
      prompt: 'Create 10 questions for [level] [subject] learners on [topic you are teaching this week].',
      search: '[your topic]',
      tools: 'Whatever your subject, <strong>read aloud</strong>, <strong>translate</strong> and <strong>extra time</strong> in Accommodations help learners access the same activity.'
    }
  };

  var sel = document.getElementById('area-select');
  var panel = document.getElementById('area-panel');
  if (!sel || !panel) return;

  // Build the dropdown
  GROUPS.forEach(function (g) {
    var og = document.createElement('optgroup');
    og.label = g[0];
    g[1].forEach(function (key) {
      var o = document.createElement('option');
      o.value = key; o.textContent = AREAS[key].name;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  function render(key) {
    var a = AREAS[key];
    if (!a) { panel.hidden = true; panel.innerHTML = ''; return; }
    var ideas = a.ideas.map(function (i) {
      return '<li class="idea"><span class="idea-type">' + i[0] + '</span>' +
        '<span class="idea-text">' + i[2] + '</span>' +
        '<a class="idea-link" href="#' + i[1] + '">' + TILE[i[1]] + ' <i class="fa-solid fa-arrow-down" aria-hidden="true"></i></a></li>';
    }).join('');
    panel.innerHTML =
      '<div class="area-head"><h3>Ideas for ' + a.name + '</h3><p>Pick one idea, then follow the tile it links to.</p></div>' +
      '<div class="area-body">' +
        '<ol class="ideas">' + ideas + '</ol>' +
        '<div class="area-side">' +
          '<div class="side-box"><h4><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Let Wayground AI draft it</h4>' +
            '<p class="area-prompt">' + esc(a.prompt) + '</p>' +
            '<button class="copy-btn" data-copy="' + esc(a.prompt) + '"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy prompt</button>' +
            '<p class="area-hint">Paste it into <span class="path">Create → Assessment</span> (<a href="#t2">tile 02</a>). Change anything in [brackets] and the level to suit your group.</p></div>' +
          '<div class="side-box"><h4><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> Or start from the Library</h4>' +
            '<p>Click <strong>Library</strong> and search: <strong>' + esc(a.search) + '</strong> ' +
            '<button class="copy-btn" style="padding:2px 9px" data-copy="' + esc(a.search) + '">Copy</button></p></div>' +
        '</div>' +
      '</div>' +
      '<div class="callout tip" style="margin:0 20px 20px"><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i><p><strong>Useful for your area:</strong> ' + a.tools + '</p></div>';
    panel.hidden = false;
  }

  // Remember the choice (per viewer), and allow ?area=maths links
  var saved = null;
  try { saved = new URLSearchParams(window.location.search).get('area'); } catch (e) {}
  if (!saved) { try { saved = window.localStorage.getItem('slel-area'); } catch (e) {} }
  if (saved && AREAS[saved]) { sel.value = saved; render(saved); }

  sel.addEventListener('change', function () {
    try { window.localStorage.setItem('slel-area', sel.value); } catch (e) {}
    render(sel.value);
  });
})();
