'use strict';

const lessons = [
  {label:'01 / FOUNDATION',title:'ความหมายและความสำคัญของงานช่าง',html:`<p>งานช่างเป็นการใช้ความรู้และทักษะในการสร้าง ติดตั้ง ซ่อมแซม และบำรุงรักษาสิ่งของหรือสิ่งก่อสร้างให้ใช้งานได้อย่างเหมาะสมและปลอดภัย</p><ul><li><strong>ประโยชน์ต่อตนเอง:</strong> ซ่อมแซมของใช้เบื้องต้นและประหยัดค่าใช้จ่าย</li><li><strong>ประโยชน์ต่อสังคม:</strong> ดูแลอาคารสถานที่และช่วยแก้ปัญหาในชุมชน</li><li><strong>คุณลักษณะช่างที่ดี:</strong> รอบคอบ มีวินัย รับผิดชอบ ซื่อสัตย์ และคำนึงถึงความปลอดภัย</li></ul><p><strong>ลองคิด:</strong> หากโต๊ะเรียนโยก นักเรียนควรตรวจหาสาเหตุและวางแผนแก้ไขอย่างไรก่อนลงมือ?</p>`},
  {label:'02 / CATEGORIES',title:'ประเภทของงานช่าง',html:`<ul><li><strong>งานช่างไม้:</strong> วัด ตัด ประกอบ และซ่อมเฟอร์นิเจอร์ไม้</li><li><strong>งานช่างไฟฟ้า:</strong> ติดตั้งและดูแลอุปกรณ์ไฟฟ้าโดยผู้มีความรู้และมาตรการความปลอดภัย</li><li><strong>งานช่างประปา:</strong> ดูแลท่อน้ำ ก๊อกน้ำ และระบบระบายน้ำ</li><li><strong>งานช่างโลหะ:</strong> ตัด เจาะ ขึ้นรูป และประกอบชิ้นงานโลหะ</li><li><strong>งานช่างปูนและสี:</strong> ซ่อมพื้นผิว ก่อ ฉาบ และทาสี</li></ul><p><strong>กิจกรรม:</strong> สำรวจสิ่งของ 5 ชนิดในบ้าน แล้วจัดกลุ่มว่าเกี่ยวข้องกับงานช่างประเภทใด</p>`},
  {label:'03 / TOOLS',title:'เครื่องมือช่างพื้นฐาน',html:`<ul><li><strong>ตลับเมตรและไม้บรรทัด:</strong> ใช้วัดระยะและกำหนดขนาด</li><li><strong>ค้อน:</strong> ใช้ตอกหรือถอนตะปูตามชนิดของค้อน</li><li><strong>ไขควง:</strong> ใช้ขันหรือคลายสกรู โดยเลือกหัวให้ตรงชนิด</li><li><strong>ประแจ:</strong> ใช้ขันหรือคลายนอตและสลักเกลียว</li><li><strong>คีม:</strong> ใช้จับ ดัด หรือจับยึดชิ้นงานตามชนิด</li></ul><p>ตรวจสอบด้ามจับและส่วนทำงานก่อนใช้ ห้ามใช้เครื่องมือชำรุด และทำความสะอาดเก็บเข้าที่หลังเสร็จงาน</p>`},
  {label:'04 / PROCESS',title:'กระบวนการทำงานช่างอย่างเป็นระบบ',html:`<ol><li><strong>วิเคราะห์ปัญหา:</strong> สำรวจสภาพและระบุสิ่งที่ต้องแก้ไข</li><li><strong>วางแผน:</strong> เลือกวิธี วัสดุ เครื่องมือ เวลา และความปลอดภัย</li><li><strong>ลงมือปฏิบัติ:</strong> ทำงานตามขั้นตอนโดยมีครูหรือผู้ชำนาญดูแลตามความเสี่ยง</li><li><strong>ตรวจสอบ:</strong> ทดสอบความแข็งแรงและการทำงานอย่างปลอดภัย</li><li><strong>ปรับปรุงและเก็บงาน:</strong> แก้ข้อบกพร่อง ทำความสะอาด และบันทึกผล</li></ol><p><strong>ภารกิจเล็ก ๆ:</strong> ออกแบบแผนการซ่อมชั้นวางของที่หลวม โดยระบุเครื่องมือและข้อควรระวัง</p>`}
];

const questions = [
  {q:'ข้อใดอธิบายความหมายของงานช่างได้ครอบคลุมที่สุด',choices:['การตกแต่งบ้านเท่านั้น','การสร้าง ติดตั้ง ซ่อม และบำรุงรักษาโดยใช้ทักษะเฉพาะ','การจำหน่ายวัสดุก่อสร้าง','การใช้เครื่องมือไฟฟ้าทุกชนิด'],a:1,why:'งานช่างครอบคลุมการสร้าง ติดตั้ง ซ่อมแซม และบำรุงรักษา'},
  {q:'ประโยชน์สำคัญของการมีทักษะงานช่างพื้นฐานคือข้อใด',choices:['ทำให้อุปกรณ์ไม่ต้องบำรุงรักษา','ซ่อมแซมของใช้เบื้องต้นได้อย่างเหมาะสม','ทำงานเสี่ยงได้โดยไม่ต้องเรียนรู้','ไม่จำเป็นต้องตรวจเครื่องมือ'],a:1,why:'ทักษะพื้นฐานช่วยดูแลของใช้และลดค่าใช้จ่ายได้'},
  {q:'การซ่อมก๊อกน้ำรั่วเกี่ยวข้องกับงานช่างประเภทใด',choices:['งานช่างประปา','งานช่างไม้','งานช่างโลหะ','งานช่างสี'],a:0,why:'ก๊อกน้ำและท่อน้ำเป็นส่วนหนึ่งของระบบประปา'},
  {q:'หากต้องการวัดความยาวของแผ่นไม้ ควรเลือกเครื่องมือใด',choices:['ค้อน','คีม','ตลับเมตร','ไขควง'],a:2,why:'ตลับเมตรใช้วัดระยะและความยาว'},
  {q:'ข้อใดเป็นวิธีใช้ไขควงอย่างเหมาะสม',choices:['ใช้แทนสิ่วได้ทุกครั้ง','เลือกหัวไขควงให้ตรงกับสกรู','ใช้ไขควงที่ด้ามแตก','จับปลายไขควงขณะหมุน'],a:1,why:'หัวไขควงที่ตรงชนิดและขนาดช่วยลดความเสียหายและการลื่นหลุด'},
  {q:'ก่อนใช้งานเครื่องมือช่างควรทำสิ่งใดเป็นอันดับแรก',choices:['รีบเริ่มเพื่อประหยัดเวลา','ตรวจสภาพเครื่องมือและพื้นที่ทำงาน','ใช้เครื่องมือที่เสียหายก่อน','ไม่ต้องอ่านคำแนะนำ'],a:1,why:'การตรวจสภาพก่อนใช้งานช่วยลดอุบัติเหตุ'},
  {q:'หากพบสายไฟชำรุด ควรปฏิบัติอย่างไร',choices:['ใช้ต่อไปถ้าไฟยังติด','ใช้มือเปล่าจับตรวจ','หยุดใช้งาน ตัดแหล่งจ่ายไฟเมื่อทำได้อย่างปลอดภัย และแจ้งผู้รับผิดชอบ','พันเทปแล้วใช้งานทันทีโดยไม่ตรวจ'],a:2,why:'ต้องหลีกเลี่ยงการสัมผัสส่วนที่เสี่ยงและแจ้งครูหรือผู้ชำนาญ'},
  {q:'ข้อใดเป็นอุปกรณ์ป้องกันดวงตาในการทำงานช่าง',choices:['แว่นตานิรภัย','หมวกแก๊ป','ผ้าพันคอ','รองเท้าแตะ'],a:0,why:'แว่นตานิรภัยช่วยป้องกันเศษวัสดุกระเด็นเข้าดวงตา'},
  {q:'ขั้นตอนใดควรทำก่อนลงมือซ่อมแซมชิ้นงาน',choices:['ทิ้งวัสดุทั้งหมด','วิเคราะห์ปัญหาและวางแผน','ทำงานโดยไม่เตรียมเครื่องมือ','ข้ามการตรวจสอบความเสี่ยง'],a:1,why:'การวิเคราะห์และวางแผนทำให้งานเป็นระบบและปลอดภัย'},
  {q:'หลังปฏิบัติงานช่างเสร็จแล้วควรทำอย่างไร',choices:['ทิ้งเครื่องมือไว้ที่พื้น','เก็บเครื่องมือโดยไม่ตรวจผลงาน','ตรวจผลงาน ทำความสะอาด และจัดเก็บเครื่องมือ','ปล่อยเครื่องมือเสียไว้ให้ผู้อื่นใช้'],a:2,why:'การตรวจงานและเก็บเครื่องมือเป็นส่วนหนึ่งของกระบวนการทำงานที่ดี'}
];

const $ = id => document.getElementById(id);
let activeLesson = 0;
const menu = $('nav');
$('menuToggle').addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  $('menuToggle').setAttribute('aria-expanded', String(isOpen));
  $('menuToggle').setAttribute('aria-label', isOpen ? 'ปิดเมนู' : 'เปิดเมนู');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  $('menuToggle').setAttribute('aria-expanded', 'false');
  $('menuToggle').setAttribute('aria-label', 'เปิดเมนู');
}));

function showLesson(index) {
  activeLesson = index;
  const lesson = lessons[index];
  $('detailLabel').textContent = lesson.label;
  $('detailTitle').textContent = lesson.title;
  $('detailBody').innerHTML = lesson.html;
  $('detailNext').textContent = index === lessons.length - 1 ? 'กลับบทเรียนแรก ↺' : 'บทเรียนถัดไป →';
  $('lessonDetail').hidden = false;
  $('lessonDetail').scrollIntoView({behavior:'smooth',block:'start'});
}
document.querySelectorAll('.lesson-open').forEach(button => button.addEventListener('click', () => showLesson(Number(button.dataset.lesson))));
$('closeLesson').addEventListener('click', () => { $('lessonDetail').hidden = true; $('lessons').scrollIntoView({behavior:'smooth'}); });
$('detailNext').addEventListener('click', () => showLesson((activeLesson + 1) % lessons.length));

let current = 0;
let selected = Array(questions.length).fill(null);
function renderQuestion() {
  const item = questions[current];
  $('progressText').textContent = `ข้อ ${current + 1} จาก ${questions.length}`;
  $('progressPercent').textContent = `${Math.round((current + 1) / questions.length * 100)}%`;
  $('progressBar').style.width = `${(current + 1) / questions.length * 100}%`;
  $('questionText').textContent = item.q;
  $('answerOptions').replaceChildren();
  item.choices.forEach((choice, index) => {
    const label = document.createElement('label');
    label.className = 'answer' + (selected[current] === index ? ' selected' : '');
    const input = document.createElement('input');
    input.type = 'radio'; input.name = 'answer'; input.value = String(index); input.checked = selected[current] === index;
    const text = document.createElement('span'); text.textContent = choice;
    label.append(input,text);
    input.addEventListener('change', () => { selected[current] = index; $('answerNotice').textContent = ''; renderQuestion(); });
    $('answerOptions').append(label);
  });
  $('prevQuestion').disabled = current === 0;
  $('nextQuestion').textContent = current === questions.length - 1 ? 'ส่งคำตอบและดูคะแนน ✓' : 'ข้อถัดไป →';
  $('answerNotice').textContent = '';
}
function startQuiz() {
  current = 0; selected = Array(questions.length).fill(null);
  $('quizStart').hidden = true; $('quizResult').hidden = true; $('quizActive').hidden = false;
  renderQuestion(); $('quizPanel').scrollIntoView({behavior:'smooth',block:'center'});
}
function showResult() {
  const score = questions.reduce((sum,item,index) => sum + Number(selected[index] === item.a),0);
  $('scoreNumber').textContent = String(score);
  $('resultTitle').textContent = score >= 8 ? 'ยอดเยี่ยม! คุณเข้าใจงานช่างดีมาก' : score >= 5 ? 'ทำได้ดี! ทบทวนอีกนิด' : 'เริ่มต้นได้ดี ลองทบทวนบทเรียนอีกครั้ง';
  $('resultMessage').textContent = `คุณตอบถูก ${score} จาก ${questions.length} ข้อ (${score * 10}%) — ดูเฉลยด้านล่างและกลับไปทบทวนได้เสมอ`;
  $('reviewList').replaceChildren();
  questions.forEach((item,index) => {
    const correct = selected[index] === item.a;
    const row = document.createElement('div'); row.className = 'review';
    const heading = document.createElement('strong'); heading.textContent = `${index + 1}. ${item.q}`;
    const status = document.createElement('span'); status.className = correct ? 'correct' : 'incorrect';
    status.textContent = `${correct ? '✓ ถูกต้อง' : '✕ ไม่ถูกต้อง'} — คำตอบ: ${item.choices[item.a]}`;
    const explanation = document.createElement('div'); explanation.textContent = item.why;
    row.append(heading,status,explanation); $('reviewList').append(row);
  });
  $('quizActive').hidden = true; $('quizResult').hidden = false;
  $('quizPanel').scrollIntoView({behavior:'smooth',block:'center'});
}
$('startQuiz').addEventListener('click',startQuiz);
$('restartQuiz').addEventListener('click',startQuiz);
$('prevQuestion').addEventListener('click',() => { if(current > 0){current--;renderQuestion();} });
$('nextQuestion').addEventListener('click',() => {
  if(selected[current] === null) { $('answerNotice').textContent = 'กรุณาเลือกคำตอบก่อนดำเนินการต่อ'; return; }
  if(current < questions.length - 1) { current++; renderQuestion(); } else { showResult(); }
});
