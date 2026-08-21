/** مرجع التصميم: index.html المرفق هو المواصفة الحاكمة للهيكل والألوان والخطوط. */
import { useCallback, useEffect, useState, type ReactNode } from "react";

const total = 12;

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span>{children}</span><span className="dot" /></div>;
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel ${className}`}>{children}</div>;
}

function Flag({ children, ok = false }: { children: ReactNode; ok?: boolean }) {
  return <div className={`flag ${ok ? "ok" : ""}`}>{children}</div>;
}

function Table({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <table className={className}>{children}</table>;
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const go = useCallback((next: number) => setIndex(Math.max(0, Math.min(total - 1, next))), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(index + 1);
      if (event.key === "ArrowRight") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  const slides = [
    <section className="deck-slide" key="cover">
      <Eyebrow>Service Brain</Eyebrow>
      <h1>عيادة د. سيف موهوب — <span>خريطة الخدمة الاستراتيجية الكاملة</span></h1>
      <p className="lede">11 قسم — من نواة خدمة طب الأطفال وحديثي الولادة حتى الاستراتيجية النهائية في جملة واحدة.</p>
    </section>,
    <section className="deck-slide" key="core">
      <Eyebrow>01 · Service Core · جوهر الخدمة</Eyebrow>
      <h2>نواة الخدمة</h2>
      <Table className="mt18"><tbody>
        <tr><td className="label-cell">الخدمة</td><td>خدمة الكشف والمتابعة الطبية لطب الأطفال وحديثي الولادة — عيادة د. سيف موهوب</td></tr>
        <tr><td className="label-cell">الفئة</td><td>Local Healthcare / Pediatric Care — خدمة طبية محلية B2C في الشرقية، مصر</td></tr>
        <tr><td className="label-cell">نطاق السعر</td><td>🔶 غير محدد — يحتاج تأكيد سعر الكشف الأول والمتابعة والفرق بين الموقعين</td></tr>
        <tr><td className="label-cell">نوع الخدمة</td><td>خدمة مباشرة: كشف، استشارة، ومتابعة دورية تُسلّم وقت الزيارة</td></tr>
        <tr><td className="label-cell">الجمهور</td><td>أمهات وآباء حديثي الولادة وحتى 5 سنوات في أبو حماد والعباسة ومحيطهما</td></tr>
        <tr><td className="label-cell">المنصة</td><td>Facebook — 51K متابع؛ TikTok والحساب الشخصي قنوات مساندة غير موحّدة</td></tr>
      </tbody></Table>
    </section>,
    <section className="deck-slide" key="breakdown">
      <Eyebrow>02 · Service Breakdown · تفكيك الخدمة</Eyebrow>
      <h2>بيعمل إيه بالظبط، وإزاي</h2>
      <div className="grid2 mt16">
        <Panel><b>إيه اللي بيعمله فعلاً</b><p className="lede small">كشف وتشخيص ومتابعة متخصصة: تقييم النمو، التطعيمات، استشارات الرضاعة والتغذية، ومتابعة الأعراض غير الطبيعية.</p></Panel>
        <Panel><b>خطوة بخطوة</b><ul className="plain mt8"><li>حجز الموعد — واتساب موصى به</li><li>الحضور لأحد الموقعين</li><li>الكشف والتشخيص</li><li>توضيح العلاج أو الخطة</li><li>موعد متابعة عند الحاجة</li></ul></Panel>
        <Panel><b>قبل</b><p className="lede small">قلق وتخمين ونصائح غير طبية قد تؤخر ملاحظة مشكلة نمو أو موعد تطعيم مهم.</p></Panel>
        <Panel><b>بعد</b><p className="lede small">طمأنينة، متابعة موثقة مع نفس الطبيب، وجدول تطعيمات واضح.</p></Panel>
      </div>
      <Flag>🔶 المدة، وجود معمل أو أشعة، وخط الحالات المستعجلة خارج المواعيد تحتاج تأكيداً من العيادة</Flag>
    </section>,
    <section className="deck-slide" key="problem">
      <Eyebrow>03 · Problem ID · تحديد المشكلة</Eyebrow>
      <h2>3 مستويات للمشكلة</h2>
      <div className="problem-stack mt18">
        <Panel><b className="signal">SURFACE — الظاهرة</b><p className="lede small">«عايزة دكتور أطفال كويس وقريب مني» أو «محتاجة أعرف معاد التطعيم الجاي إمتى».</p></Panel>
        <Panel><b className="gold">DEEP — الأعمق</b><p className="lede small">القلق من أن تجاهل عرض بسيط أو التأخر في قرار طبي يتحول إلى مشكلة صحية أكبر، مع غياب الثقة في تشخيص غير متخصص.</p></Panel>
        <Panel className="alert-border"><b className="alert">HIDDEN — الخفية</b><p className="lede small">الخوف من ألا تكون «أماً كافية» إذا فاتت علامة مبكرة، وما يصاحبه من شعور بالمسؤولية والذنب.</p></Panel>
      </div>
    </section>,
    <section className="deck-slide" key="context">
      <Eyebrow>04 · Context Mapping · خريطة السياق</Eyebrow>
      <h2>امتى وفين وليه بتحصل المشكلة</h2>
      <Table className="mt18"><tbody>
        <tr><td className="label-cell short">امتى؟</td><td>بعد الولادة مباشرة، عند استحقاق تطعيم، أو عند حرارة أو طفح أو بكاء مستمر.</td></tr>
        <tr><td className="label-cell short">فين؟</td><td>في البيت عند ملاحظة العرض، أو أونلاين على فيسبوك وجروبات الأمهات المحلية.</td></tr>
        <tr><td className="label-cell short">بيدور إزاي؟</td><td>يسأل أمهات أخريات، يبحث عن دكتور قريب، أو يراجع توصيات وتجارب سابقة.</td></tr>
        <tr><td className="label-cell short">بيفكر في إيه؟</td><td>«الدكتور ده موثوق؟» / «هيرد بسرعة لو الوضع مستعجل؟»</td></tr>
        <tr><td className="label-cell short">الخطر</td><td>أي تأخر في الاستجابة خلال أول 30 دقيقة قد يدفع العميل إلى بديل آخر.</td></tr>
        <tr><td className="label-cell short">المحفز</td><td>عرض غير طبيعي، تطعيم مستحق، أو توصية مباشرة من أم جرّبت العيادة.</td></tr>
      </tbody></Table>
    </section>,
    <section className="deck-slide" key="solutions">
      <Eyebrow>05 · Current Solutions · البدائل الحالية</Eyebrow>
      <h2>ليه البدائل الموجودة بتفشل</h2>
      <Table className="mt16 alternatives-table"><thead><tr><th>المنافس</th><th>ما الذي يجعله منافساً؟</th><th>أقوى طبقة في الرحلة</th><th>أين يضعف؟</th><th>تهديده الفعلي</th></tr></thead><tbody>
        <tr><td>د. محمد صلاح الدين</td><td>4.4/5 من 12 مراجعة، شارع الجيش، هاتف مباشر</td><td>الثقة المحلية والاكتشاف</td><td>لا تخصص فرعي أو مؤهل تفصيلي أو حجز منظم ظاهر</td><td>مرتفع في البحث المحلي العاجل</td></tr>
        <tr><td>د. ماجد شعيب عاصي</td><td>5/5 من مراجعتين، قريب جداً، هاتف وعنوان</td><td>الانطباع الأول والتقييم</td><td>عينة صغيرة جداً؛ لا خدمات ولا مسار حجز ظاهر</td><td>متوسط؛ يفوز بالقرار السريع لا الثقة الطويلة</td></tr>
        <tr><td>مركز د. محمد رجب</td><td>5/5 من 6 مراجعات، هاتف وساعات ظاهرة</td><td>التقييم والاتصال</td><td>لا مؤهل أكاديمي أو خدمات حديثي ولادة أو حجز إلكتروني</td><td>متوسط إلى مرتفع في المكالمات المحلية</td></tr>
        <tr><td>دار الطفل</td><td>3.5/5 من 50 مراجعة، كيان واسع وساعات «Always open»</td><td>اتساع العرض والحضور المؤسسي</td><td>تقييم أقل وتصنيف Google غير واضح؛ الطبيب الفرد غير ظاهر</td><td>مرتفع للعائلات التي تريد مركزاً شاملاً أو ساعات مرنة</td></tr>
        <tr><td>د. أحمد فكري</td><td>صفحة محلية بـ 8.7K متابع، هاتف، وذكر الكشف بالسونار</td><td>Facebook والاسم المحلي</td><td>لا مراجعات Google ظاهرة، ولا مؤهلات أو حجز منظم</td><td>مرتفع على Facebook، وأقل على Google</td></tr>
        <tr><td>د. علي الروبي</td><td>4.8/5 من 31 مراجعة، أخصائي أطفال وحديثي الولادة</td><td>الثقة الاجتماعية المتراكمة</td><td>يبعد نحو 2.13 كم ولا تظهر كل تفاصيل العرض في Maps</td><td>تهديد ثانوي قوي بسبب حجم المراجعات</td></tr>
      </tbody></Table>
      <Flag ok>✓ التفوق لا يأتي من القرب فقط: «مؤهل واضح + فرعان محددان + مواعيد مؤكدة + حجز WhatsApp» ينقل القرار من البحث إلى الحجز.</Flag>
    </section>,
    <section className="deck-slide" key="mechanism">
      <Eyebrow>06 · Unique Mechanism · الميكانيزم الفريد</Eyebrow>
      <h2>ليه العيادة مختلفة فعلاً</h2>
      <Panel className="mt16"><b>الشرح البسيط</b><p className="lede small">دكتور واحد حاصل على ماجستير في حديثي الولادة يتابع الطفل في موقعين قريبين، بدلاً من الانتقال بين أطباء مختلفين في كل زيارة.</p></Panel>
      <Panel className="mt14"><b>ليه ده منطقي</b><p className="lede small">التخصص الدقيق + ثبات نفس الطبيب يصنعان سجل متابعة متصلاً للنمو، بدلاً من تشخيص منقطع كما يحدث غالباً في الخدمات العامة.</p></Panel>
      <Flag ok>✓ التخصص الأكاديمي الواضح + متابعة ثابتة + موقعان قريبان = بديل أكثر طمأنة من المستشفى الواسع أو الحجز غير الواضح</Flag>
    </section>,
    <section className="deck-slide" key="competitive">
      <Eyebrow>07 · Competitive · المنافسون</Eyebrow>
      <h2>الفجوة في السوق</h2>
      <Table className="mt18"><thead><tr><th>المنافس</th><th>القوة</th><th>الضعف / الفجوة</th></tr></thead><tbody>
        <tr><td>د. محمد صلاح الدين</td><td>0.27 كم، تقييم 4.4/5 من 12 مراجعة</td><td>تخصص حديثي الولادة غير واضح — أبرز الماجستير والحجز الموحد</td></tr>
        <tr><td>عيادة د. ماجد شعيب</td><td>0.39 كم، تقييم 5.0/5</td><td>عينة مراجعات صغيرة جداً: مراجعتان فقط</td></tr>
        <tr><td>مركز د. محمد رجب</td><td>0.56 كم، تقييم 5.0/5 من 6 مراجعات</td><td>التخصص غير بارز — هذه هي الميزة الممكنة</td></tr>
        <tr><td>دار الطفل</td><td>حجم كبير و50 مراجعة</td><td>تقييم 3.5 وخدمات عامة؛ ينافس على الشمول لا التخصص</td></tr>
        <tr><td>د. علي الروبي</td><td>تخصص مذكور و31 مراجعة</td><td>يبعد 2.13 كم، مما يدعم أفضلية القرب</td></tr>
      </tbody></Table>
      <Flag>⚠ Google Business Profile للعيادة غير ظاهر بوضوح: بناء الملف وجمع أول 10 تقييمات حقيقية أولوية فورية</Flag>
    </section>,
    <section className="deck-slide" key="proof">
      <Eyebrow>08 · Reason to Believe · سبب اختيار الخدمة</Eyebrow>
      <h2>إيه عندنا فعلياً وإيه الناقص</h2>
      <Table className="mt16 compact"><thead><tr><th>نوع الدليل</th><th>الوضع الحالي</th><th>متاح؟</th></tr></thead><tbody>
        <tr><td>نتيجة مرئية</td><td>صور العيادة والشهادات وفريق العمل مناسبة، مع احترام خصوصية المرضى</td><td className="num">جزئياً</td></tr>
        <tr><td>أرقام وإحصائيات</td><td>عدد الحالات وسنوات الخبرة يحتاجان تأكيداً رقمياً من العيادة</td><td className="num">غير مؤكد</td></tr>
        <tr><td>قبل / بعد</td><td>غير مناسب كصيغة تقليدية للخدمات الطبية وخصوصية المرضى</td><td className="num alert">لأ</td></tr>
        <tr><td>تقييمات حقيقية</td><td>تقييم واحد تقريباً على صفحة 51K متابع — فجوة أولوية</td><td className="num alert">لأ</td></tr>
        <tr><td>شهادة خبير</td><td>ماجستير طب الأطفال وحديثي الولادة وبكالوريوس طب وجراحة من الأزهر</td><td className="num">متاح</td></tr>
        <tr><td>سياسة متابعة</td><td>تحتاج قراراً واضحاً بشأن الحالات التي تتطلب إعادة كشف قريباً</td><td className="num">غير مؤكد</td></tr>
      </tbody></Table>
      <Flag>⚠ أقوى دليل جاهز الآن هو التخصص الأكاديمي؛ لا تضعه في الخلفية</Flag>
    </section>,
    <section className="deck-slide" key="objections">
      <Eyebrow>09 · Objections · الاعتراضات</Eyebrow>
      <h2>أهم 5 اعتراضات وردودها</h2>
      <Table className="mt16 compact"><thead><tr><th>الاعتراض</th><th>الرد المقترح</th><th>الاستخدام في الكريتيف</th></tr></thead><tbody>
        <tr><td>«هل هو متخصص فعلاً؟»</td><td>إبراز ماجستير حديثي الولادة بشكل واضح</td><td>عرض الشهادة كنص واضح في كل إعلان أو Reel</td></tr>
        <tr><td>«بعيد عني»</td><td>توضيح أبو حماد والعباسة، المواعيد والخرائط</td><td>منشور مثبت للموقعين وساعات العمل</td></tr>
        <tr><td>«غالي»</td><td>«كشف تعارف بسعر واضح» حتى اعتماد الرقم</td><td>دعوة فعلية تعد بالوضوح لا برقم غير مؤكد</td></tr>
        <tr><td>«هيرد بسرعة؟»</td><td>زمن رد متوقع عبر واتساب في أوقات العمل</td><td>رسالة ترحيب تلقائية تحدد توقع الاستجابة</td></tr>
        <tr><td>«فين التقييمات؟»</td><td>طلب تقييم حقيقي موحّد بعد كل زيارة</td><td>إظهار التقييمات الأولى عند توفرها</td></tr>
      </tbody></Table>
    </section>,
    <section className="deck-slide" key="triggers">
      <Eyebrow>10 · Buying Triggers · محفزات الشراء</Eyebrow>
      <h2>أقوى المحفزات بالأولوية</h2>
      <div className="grid2 mt16">
        <ul className="plain"><li><b>عرض غير طبيعي</b> — طمأنة سريعة وزر واتساب مباشر (أولوية عالية جداً)</li><li><b>توصية من أم جربت</b> — أهم دليل ثقة اجتماعي (أولوية عالية جداً)</li><li><b>تطعيم مستحق</b> — محتوى بجدول واضح قبل الموعد المتوقع</li></ul>
        <ul className="plain"><li><b>قرب الولادة</b> — تعريف استباقي للحوامل في الشهر الأخير</li><li><b>موقع ومواعيد واضحة</b> — يقلل الاحتكاك قبل الاتصال</li><li><b>رد سريع وواضح</b> — ميزة عملية وقت القلق</li></ul>
      </div>
    </section>,
    <section className="deck-slide" key="strategy">
      <Eyebrow>11 · Strategy · الاستراتيجية</Eyebrow>
      <h2>الاستراتيجية في جملة واحدة</h2>
      <div className="grid2 mt16">
        <Panel><b className="signal">الخدمة</b><p className="lede small">كشف ومتابعة متخصصة لطب الأطفال وحديثي الولادة.</p></Panel>
        <Panel><b className="signal">الجمهور</b><p className="lede small">أمهات أطفال حديثي الولادة وحتى 5 سنوات في أبو حماد والعباسة.</p></Panel>
        <Panel><b className="signal">المشكلة</b><p className="lede small">غياب مسار ثقة وحجز واضح عند القلق من تشخيص غير متخصص.</p></Panel>
        <Panel><b className="signal">الميكانيزم</b><p className="lede small">تخصص ماجستير + طبيب ثابت + موقعان قريبان.</p></Panel>
      </div>
      <Panel className="strategy mt16"><p>«نقدّم متابعة طبية متخصصة لحديثي الولادة والأطفال لأمهات في أبو حماد والعباسة القلقانين من غياب تشخيص دقيق وموثوق، عن طريق دكتور واحد حاصل على ماجستير في هذا التخصص بمتابعة ثابتة في موقعين قريبين.»</p></Panel>
    </section>,
  ];

  return <main id="deck" dir="rtl">
    <div id="progress"><div id="progress-bar" style={{ width: `${((index + 1) / total) * 100}%` }} /></div>
    <div id="counter"><span>{String(index + 1).padStart(2, "0")}</span> / <span>{String(total).padStart(2, "0")}</span></div>
    {slides.map((slide, position) => <div className={`slide-shell ${position === index ? "active" : ""}`} key={position}>{slide}</div>)}
    <button id="prev" className="arrow" onClick={() => go(index - 1)} disabled={index === 0} aria-label="الشريحة السابقة">→</button>
    <button id="next" className="arrow" onClick={() => go(index + 1)} disabled={index === total - 1} aria-label="الشريحة التالية">←</button>
    <nav id="dots" aria-label="شرائح العرض">{slides.map((_, position) => <button key={position} className={`navdot ${position === index ? "active" : ""}`} onClick={() => go(position)} aria-label={`انتقل إلى الشريحة ${position + 1}`} />)}</nav>
  </main>;
}
