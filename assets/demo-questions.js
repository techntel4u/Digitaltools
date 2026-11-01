// Demo questions by curriculum area (follow-along page).
// Each area has one Practice Set question and one Interactive Video question.
// Answers: options are [text, isCorrect]; short-answer questions use `answer`.
// The selected area is shared with the choice board (localStorage key slel-area).
(function () {
  var GROUPS = [
    ['English, maths and language', ['english', 'maths', 'fs', 'esol']],
    ['Academic and adult learning', ['alevels', 'access', 'science', 'education', 'community']],
    ['Business, digital and creative', ['business', 'computing', 'creative', 'travel']],
    ['Technical and trades', ['engineering', 'construction', 'conman', 'buildserv', 'automotive']],
    ['Services, care and sport', ['hair', 'beauty', 'hospitality', 'earlyyears', 'hsc', 'sports', 'uniform']],
    ['Not listed', ['other']]
  ];

  function yt(id) { return 'https://www.youtube.com/watch?v=' + id; }

  var Q = {
    english: { name: 'English',
      ps: { type: 'Single-select', q: 'Which language technique is used in “The wind whispered through the trees”?',
        options: [['Simile', 0], ['Personification', 1], ['Alliteration', 0], ['Metaphor', 0]],
        hint: 'Can the wind really whisper? Who usually does?' },
      iv: { type: 'Multiple choice', at: 'when the video covers similes',
        q: 'Which of these is a simile?',
        options: [['As brave as a lion', 1], ['The classroom was a zoo', 0], ['Big bad bear', 0], ['Bang!', 0]],
        video: ['Language Techniques - GCSE English', yt('yag8-faty8Y')] } },

    maths: { name: 'Maths',
      ps: { type: 'Short answer', q: 'A jacket costs £40. It is reduced by 15%. What is the sale price in pounds?',
        answer: '34 (also accept 34.00 and £34)',
        hint: 'Find 10% and 5% of £40, add them together, then take that away from £40.' },
      iv: { type: 'Multiple choice', at: 'after the first worked example',
        q: 'What is 15% of £60?',
        options: [['£6', 0], ['£9', 1], ['£15', 0], ['£45', 0]],
        video: ['Percentages without a calculator - Corbettmaths', yt('9QKc5bZPLv0')] } },

    fs: { name: 'Functional Skills & Gap',
      ps: { type: 'Short answer', q: 'You buy a sandwich for £3.45 and a drink for £2.80. How much change do you get from £10?',
        answer: '3.75 (also accept £3.75)',
        hint: 'Add the two prices first, then take the total away from £10.' },
      iv: { type: 'Multiple choice', at: 'after the video shows how to work out a discount',
        q: 'A coat costs £60. It has 20% off. What is the sale price?',
        options: [['£12', 0], ['£40', 0], ['£48', 1], ['£58', 0]],
        video: ['Functional Skills Maths Level 1: Calculate discounts in multiples of 5%', yt('bxZ5LOjq8hA')] } },

    esol: { name: 'ESOL',
      ps: { type: 'Short answer', q: 'Fill in the gap: “I’d like to ____ an appointment, please.”',
        answer: 'make (also accept book)',
        hint: 'It is a verb. You can ____ a phone call or ____ a cake.' },
      iv: { type: 'Open-ended', at: 'after the patient phones the surgery',
        q: 'What information did the receptionist ask for? Write one thing.',
        video: ['ESOL at Bell House Beginners: Booking a Doctor’s Appointment', yt('b4wf7pO2HsY')] } },

    alevels: { name: 'A Levels',
      ps: { type: 'Single-select', q: 'Which exam command word asks you to make a judgement?',
        options: [['Describe', 0], ['Identify', 0], ['Evaluate', 1], ['State', 0]],
        hint: 'Which word asks you to weigh up strengths and weaknesses and reach a conclusion?' },
      iv: { type: 'Multiple choice', at: 'after the video explains what retrieval practice is',
        q: 'Which of these is retrieval practice?',
        options: [['Re-reading your notes', 0], ['Highlighting the textbook', 0], ['Testing yourself without looking at your notes', 1], ['Copying out your notes neatly', 0]],
        video: ['Retrieval Practice: A video for Students', yt('jfREWvtd_DM')] } },

    access: { name: 'Access to HE',
      ps: { type: 'Single-select', q: 'Which in-text citation follows the Harvard style?',
        options: [['(Smith, 2023)', 1], ['[1]', 0], ['Smith said this in his book', 0], ['(2023, Smith)', 0]],
        hint: 'Harvard uses the author’s surname and the year, in that order.' },
      iv: { type: 'Open-ended', at: 'after the video shows a full reference for a book',
        q: 'Name two pieces of information you need to write a full Harvard reference for a book.',
        video: ['A guide to Harvard Referencing', yt('NDgqqPvMn0U')] } },

    science: { name: 'Science',
      ps: { type: 'Single-select', q: 'Which part of the cell controls its activities and contains the genetic material?',
        options: [['Cell membrane', 0], ['Cytoplasm', 0], ['Nucleus', 1], ['Ribosome', 0]],
        hint: 'Think of it as the cell’s control centre.' },
      iv: { type: 'Checkboxes', at: 'after the video compares animal and plant cells',
        q: 'Which of these are found in plant cells but not in animal cells? Tick all that apply.',
        options: [['Cell wall', 1], ['Chloroplasts', 1], ['Nucleus', 0], ['Cell membrane', 0]],
        video: ['Animal and Plant Cells - Structures, Functions and Differences', yt('jpy0KlRKnT0')] } },

    education: { name: 'Education',
      ps: { type: 'Multi-select', q: 'Which of these are formative assessment strategies? Select all that apply.',
        options: [['Mini whiteboards', 1], ['Exit tickets', 1], ['Hinge questions', 1], ['An end-of-year exam', 0]],
        hint: 'Formative assessment happens during learning, so the teacher can adapt the next step.' },
      iv: { type: 'Multiple choice', at: 'after Dylan Wiliam defines assessment for learning',
        q: 'What is assessment for learning mainly used for?',
        options: [['Grading learners at the end of a course', 0], ['Adjusting teaching while learning is still happening', 1], ['Ranking learners against each other', 0], ['Reporting results to parents', 0]],
        video: ['Dylan Wiliam: What do we Mean by Assessment for Learning?', yt('q-myBw36_DA')] } },

    community: { name: 'Community Provision',
      ps: { type: 'Single-select', q: 'Which of these is the safest password?',
        options: [['password123', 0], ['Your pet’s name', 0], ['Three random words, such as BlueTrainKettle', 1], ['Your date of birth', 0]],
        hint: 'The National Cyber Security Centre recommends using three random words.' },
      iv: { type: 'Multiple choice', at: 'after the video shows an example scam text',
        q: 'You get a text saying you are owed a tax refund and asking you to click a link. What should you do?',
        options: [['Click the link and enter your bank details', 0], ['Reply and ask for more information', 0], ['Don’t click it, and forward the text to 7726', 1], ['Share it with friends to warn them', 0]],
        video: ['How to Spot a Fake HMRC Text Message', yt('-FI93knA4H8')] } },

    business: { name: 'Business',
      ps: { type: 'Short answer', q: 'Fixed costs are £2,000. Each item sells for £10 and costs £6 to make. How many items must be sold to break even?',
        answer: '500',
        hint: 'Each item contributes £10 − £6 = £4 towards fixed costs. How many £4s make £2,000?' },
      iv: { type: 'Multiple choice', at: 'after the video defines the break-even point',
        q: 'At the break-even point...',
        options: [['The business makes its biggest profit', 0], ['Total revenue equals total costs', 1], ['Fixed costs are zero', 0], ['Sales stop growing', 0]],
        video: ['Break-even Analysis Explained Simply - Calculation and Graph Method', yt('w0VZzkdljO4')] } },

    computing: { name: 'Computing',
      ps: { type: 'Multi-select', q: 'Which of these are signs of a phishing email? Select all that apply.',
        options: [['An urgent deadline (“act within 24 hours”)', 1], ['A link asking you to confirm your bank details', 1], ['A sender address that doesn’t match the company', 1], ['An email from a colleague about a meeting you arranged', 0]],
        hint: 'Scammers try to rush you and get you to click before you think.' },
      iv: { type: 'Multiple choice', at: 'after the NCSC explains how to report a suspicious email',
        q: 'In the UK, where should you forward a suspicious email?',
        options: [['Back to the sender', 0], ['report@phishing.gov.uk', 1], ['Your whole contact list', 0], ['Nowhere: just delete it', 0]],
        video: ['Why NCSC want your phishing emails and why you shouldn’t ‘just delete it’', yt('oplHvhR6lZ0')] } },

    creative: { name: 'Creative',
      ps: { type: 'Single-select', q: 'Which shot shows a character’s whole body and some of their surroundings?',
        options: [['Close-up', 0], ['Extreme close-up', 0], ['Long shot (wide shot)', 1], ['Over-the-shoulder shot', 0]],
        hint: 'The camera is far enough away to see the character from head to toe.' },
      iv: { type: 'Multiple choice', at: 'after the video covers camera angles',
        q: 'A low-angle shot, looking up at a character, usually makes them look...',
        options: [['Weak or small', 0], ['Powerful or threatening', 1], ['Far away', 0], ['Confused', 0]],
        video: ['Film Techniques: Camera Shots & Angles', yt('RjK509LkCFM')] } },

    travel: { name: 'Travel and Tourism',
      ps: { type: 'Multi-select', q: 'Which of these are domestic tourism for someone who lives in Wolverhampton? Select all that apply.',
        options: [['A weekend in Blackpool', 1], ['A walking holiday in the Lake District', 1], ['A city break in Paris', 0], ['A cruise to Norway', 0]],
        hint: 'Domestic tourism means travelling within your own country.' },
      iv: { type: 'Multiple choice', at: 'after the video explains inbound and outbound tourism',
        q: 'A family from Spain visiting London is an example of what kind of tourism for the UK?',
        options: [['Domestic', 0], ['Inbound', 1], ['Outbound', 0], ['Business', 0]],
        video: ['Inbound, Outbound & International Tourism', yt('_PfIaHeWr2k')] } },

    engineering: { name: 'Engineering',
      ps: { type: 'Short answer', q: 'A 12 V supply drives a current of 3 A through a resistor. What is the resistance in ohms?',
        answer: '4',
        hint: 'Rearrange V = I × R to get R = V ÷ I.' },
      iv: { type: 'Multiple choice', at: 'after the video introduces V = IR',
        q: 'A current of 2 A flows through a 6 Ω resistor. What is the voltage across it?',
        options: [['3 V', 0], ['8 V', 0], ['12 V', 1], ['4 V', 0]],
        video: ['Ohm’s Law (AQA GCSE Physics)', yt('08agvQnVwvU')] } },

    construction: { name: 'Construction',
      ps: { type: 'Single-select', q: 'What does a blue circular safety sign mean?',
        options: [['You must do something (mandatory)', 1], ['You must not do something (prohibition)', 0], ['Warning of a hazard', 0], ['Safe condition or first aid', 0]],
        hint: 'Think of the “wear a hard hat” sign on site.' },
      iv: { type: 'Multiple choice', at: 'after the video covers working at height',
        q: 'What is the most common cause of fatal accidents in UK construction?',
        options: [['Falls from height', 1], ['Electric shock', 0], ['Noise', 0], ['Slips on the same level', 0]],
        video: ['8 Most Dangerous Construction Hazards Explained', yt('dLizGjJXld8')] } },

    conman: { name: 'Construction Management',
      ps: { type: 'Single-select', q: 'Under CDM 2015, a project must be notified to HSE if it lasts more than 30 working days with more than 20 workers at once, or if it exceeds how many person days?',
        options: [['100', 0], ['250', 0], ['500', 1], ['1,000', 0]],
        hint: 'It is the same figure as half a thousand.' },
      iv: { type: 'Multiple choice', at: 'after the video describes the duty holders',
        q: 'On a project with more than one contractor, who must appoint the principal designer and principal contractor?',
        options: [['The client', 1], ['The principal contractor', 0], ['HSE', 0], ['The site manager', 0]],
        video: ['CDM Regulations - An Introduction', yt('oyQAmWtvJ40')] } },

    buildserv: { name: 'Building Services',
      ps: { type: 'Single-select', q: 'In safe isolation, what does locking off the isolator prevent?',
        options: [['The circuit tripping', 0], ['Someone switching the circuit back on while you work', 1], ['The fuse blowing', 0], ['Dust getting into the board', 0]],
        hint: 'Who else might be on site, and what could they do?' },
      iv: { type: 'Multiple choice', at: 'after the video proves the voltage indicator',
        q: 'Why do you prove the voltage indicator on a proving unit before and after testing?',
        options: [['To charge its battery', 0], ['To check it was working, so a “dead” reading can be trusted', 1], ['To calibrate it', 0], ['It is only needed for three-phase', 0]],
        video: ['Electrical safe isolation procedure - Single Phase', yt('opHtgbcicTk')] } },

    automotive: { name: 'Automotive',
      ps: { type: 'Short answer', q: 'What is the legal minimum tread depth for car tyres in the UK, in millimetres?',
        answer: '1.6',
        hint: 'It is between 1 mm and 2 mm, across the central three-quarters of the tread.' },
      iv: { type: 'Multiple choice', at: 'after the video demonstrates the 20p test',
        q: 'In the 20p test, what does it mean if you can see the outer band of the coin?',
        options: [['The tyre is brand new', 0], ['The tread may be below the legal limit, so check it with a gauge', 1], ['The tyre pressure is too high', 0], ['Nothing: the test only checks the sidewall', 0]],
        video: ['How to Check Your Tread Depth - The 20p Test', yt('jYg3HRn0Jq0')] } },

    hair: { name: 'Hair',
      ps: { type: 'Single-select', q: 'Which of these is a contraindication to a permanent hair colour service?',
        options: [['Fine hair', 0], ['A positive reaction to the skin (allergy alert) test', 1], ['Long hair', 0], ['Previous highlights', 0]],
        hint: 'Which one is a risk to the client’s health?' },
      iv: { type: 'Open-ended', at: 'after the video shows the scalp being checked',
        q: 'Why do we carry out a hair and scalp analysis before a service? Give one reason.',
        video: ['How to Perform a Hair and Scalp Analysis', yt('mCV2a7dvoSQ')] } },

    beauty: { name: 'Beauty',
      ps: { type: 'Multi-select', q: 'Which of these contraindications would prevent a facial treatment? Select all that apply.',
        options: [['Conjunctivitis', 1], ['Impetigo', 1], ['Freckles', 0], ['Dry skin', 0]],
        hint: 'Look for the conditions that are infectious.' },
      iv: { type: 'Multiple choice', at: 'after the video describes the different skin types',
        q: 'A client has shine and open pores on the T-zone but dry cheeks. What is their skin type?',
        options: [['Dry', 0], ['Oily', 0], ['Combination', 1], ['Normal', 0]],
        video: ['How To Know Your Skin Type', yt('DXaDZ884hyA')] } },

    hospitality: { name: 'Hospitality',
      ps: { type: 'Short answer', q: 'How many allergens must UK food businesses declare by law?',
        answer: '14',
        hint: 'It is between 10 and 20.' },
      iv: { type: 'Checkboxes', at: 'after the video lists the allergens',
        q: 'Which of these are among the 14 allergens? Tick all that apply.',
        options: [['Celery', 1], ['Lupin', 1], ['Sesame', 1], ['Tomato', 0]],
        video: ['What are the 14 food allergens?', yt('xOxAQmiFv-s')] } },

    earlyyears: { name: 'Early Years',
      ps: { type: 'Single-select', q: 'Which of these is a specific area of learning in the EYFS?',
        options: [['Communication and language', 0], ['Physical development', 0], ['Literacy', 1], ['Personal, social and emotional development', 0]],
        hint: 'The other three are the prime areas.' },
      iv: { type: 'Checkboxes', at: 'after the video introduces the prime areas',
        q: 'Which are the three prime areas of learning? Tick all that apply.',
        options: [['Communication and language', 1], ['Physical development', 1], ['Personal, social and emotional development', 1], ['Mathematics', 0]],
        video: ['What Are the 7 Areas of Learning of the EYFS?', yt('xk2iXItzzwk')] } },

    hsc: { name: 'Health & Social Care',
      ps: { type: 'Multi-select', q: 'Which of these are care values? Select all that apply.',
        options: [['Dignity', 1], ['Privacy', 1], ['Promoting independence', 1], ['Making decisions for the person without asking them', 0]],
        hint: 'Care values put the person at the centre of their own care.' },
      iv: { type: 'Multiple choice', at: 'at the start of the hand washing demonstration',
        q: 'How long should you spend washing your hands?',
        options: [['About 5 seconds', 0], ['At least 20 seconds', 1], ['Exactly 2 minutes', 0], ['Only until they look clean', 0]],
        video: ['NHS Hand Wash Technique', yt('ns6oz4fANAw')] } },

    sports: { name: 'Sports',
      ps: { type: 'Single-select', q: 'Which muscle group straightens the leg at the knee?',
        options: [['Quadriceps', 1], ['Hamstrings', 0], ['Gastrocnemius', 0], ['Gluteals', 0]],
        hint: 'It is on the front of the thigh.' },
      iv: { type: 'Multiple choice', at: 'after the video covers the upper arm',
        q: 'Which muscle is on the front of the upper arm?',
        options: [['Triceps', 0], ['Biceps', 1], ['Deltoid', 0], ['Pectorals', 0]],
        video: ['The Major Muscles Of The Body - GCSE Level', yt('ebnm6EMugBU')] } },

    uniform: { name: 'Uniform and Public Services',
      ps: { type: 'Short answer', q: 'What number do you call for the emergency services in the UK?',
        answer: '999 (also accept 112)',
        hint: 'Three of the same digit.' },
      iv: { type: 'Multiple choice', at: 'at the start of the primary survey',
        q: 'In DR ABC, what does the D stand for?',
        options: [['Defibrillator', 0], ['Danger', 1], ['Diagnosis', 0], ['Dressing', 0]],
        video: ['DR ABC (The Primary Survey) - St John Ambulance', yt('XWdU4h4LnuM')] } },

    other: { name: 'My area isn’t listed',
      ps: { type: 'Single-select', q: 'Write one question about a key fact from this week’s lesson, with four options and one correct answer.',
        options: [['The correct answer', 1], ['A common mistake learners make', 0], ['A plausible wrong answer', 0], ['Another plausible wrong answer', 0]],
        hint: 'Write a hint that nudges learners towards the answer without giving it away.' },
      iv: { type: 'Open-ended', at: 'at the key moment in your video',
        q: 'Find a short video from your subject on YouTube, then ask: “What is the most important point so far, in your own words?”',
        video: null } }
  };

  var sel = document.getElementById('dq-select');
  var panel = document.getElementById('dq-panel');
  if (!sel || !panel) return;

  GROUPS.forEach(function (g) {
    var og = document.createElement('optgroup');
    og.label = g[0];
    g[1].forEach(function (key) {
      var o = document.createElement('option');
      o.value = key; o.textContent = Q[key].name;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  function opts(list) {
    return '<ul class="dq-opts">' + list.map(function (o) {
      return '<li class="' + (o[1] ? 'ok' : '') + '">' +
        (o[1] ? '<i class="fa-solid fa-circle-check" aria-hidden="true"></i><span class="sr">Correct: </span>'
              : '<i class="fa-regular fa-circle" aria-hidden="true"></i>') +
        esc(o[0]) + '</li>';
    }).join('') + '</ul>';
  }

  function render(key) {
    var a = Q[key];
    if (!a) { panel.hidden = true; panel.innerHTML = ''; return; }
    var ps = a.ps, iv = a.iv;
    var psBody = ps.options ? opts(ps.options) : '<p class="dq-answer"><strong>Answer:</strong> ' + esc(ps.answer) + '</p>';
    var ivBody = iv.options ? opts(iv.options) : '<p class="dq-answer"><strong>Any sensible answer.</strong> Open-ended questions aren’t marked automatically.</p>';
    var vid = iv.video
      ? '<div class="dq-video"><i class="fa-brands fa-youtube" aria-hidden="true"></i><div><a href="' + iv.video[1] + '" target="_blank" rel="noopener">' + esc(iv.video[0]) + '</a>' +
        '<button class="copy-btn" data-copy="' + iv.video[1] + '"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy video link</button></div></div>'
      : '';
    panel.innerHTML =
      '<div class="dq-grid">' +
        '<article class="dq-card dq-ps">' +
          '<div class="dq-head"><i class="fa-solid fa-list-check" aria-hidden="true"></i> Practice Set question</div>' +
          '<div class="dq-body">' +
            '<span class="dq-type">' + ps.type + '</span>' +
            '<p class="dq-q">' + esc(ps.q) + '</p>' +
            '<button class="copy-btn dq-copy" data-copy="' + esc(ps.q) + '"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy question</button>' +
            psBody +
            '<p class="dq-hint"><i class="fa-solid fa-lightbulb" aria-hidden="true"></i> <strong>Hint to add:</strong> ' + esc(ps.hint) + '</p>' +
          '</div>' +
        '</article>' +
        '<article class="dq-card dq-iv">' +
          '<div class="dq-head"><i class="fa-brands fa-youtube" aria-hidden="true"></i> Interactive Video question</div>' +
          '<div class="dq-body">' +
            vid +
            '<span class="dq-type">' + iv.type + '</span>' +
            '<p class="dq-q">' + esc(iv.q) + '</p>' +
            '<button class="copy-btn dq-copy" data-copy="' + esc(iv.q) + '"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy question</button>' +
            ivBody +
            '<p class="dq-hint"><i class="fa-solid fa-clock" aria-hidden="true"></i> <strong>When to show it:</strong> ' + esc(iv.at) + '.</p>' +
          '</div>' +
        '</article>' +
      '</div>';
    panel.hidden = false;
  }

  var saved = null;
  try { saved = new URLSearchParams(window.location.search).get('area'); } catch (e) {}
  if (!saved) { try { saved = window.localStorage.getItem('slel-area'); } catch (e) {} }
  if (saved && Q[saved]) { sel.value = saved; render(saved); }

  sel.addEventListener('change', function () {
    try { window.localStorage.setItem('slel-area', sel.value); } catch (e) {}
    render(sel.value);
  });
})();
