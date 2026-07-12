import {
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Home,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const WHATSAPP_TEXT =
  'שלום כינרת, אשמח לשמוע פרטים על שיעורים פרטיים'
const WHATSAPP_URL = `https://wa.me/972526778017?text=${encodeURIComponent(WHATSAPP_TEXT)}`

const expertise = [
  {
    title: 'הקניית קריאה וכתיבה',
    description: 'שלבי היסוד והבסיס לקריאה שוטפת.',
    icon: BookOpen,
  },
  {
    title: 'מיומנויות כתיבה מתקדמות',
    description: 'מענה על שאלות והבנת הנקרא, כתיבת טיעון.',
    icon: FileText,
  },
  {
    title: 'הכנה לבגרויות',
    description: 'כתיבה ממזגת והכנה מקיפה למבחני הבגרות.',
    icon: GraduationCap,
  },
  {
    title: 'חינוך מיוחד ושילוב',
    description: 'התאמה אישית לצרכי התלמיד/ה עם המון סבלנות והכלה.',
    icon: HeartHandshake,
  },
] as const

const audience = [
  'ילדים שזקוקים לחיזוק בקריאה, כתיבה והבנת הנקרא.',
  'תלמידים המתמודדים עם הפרעות קשב וריכוז (ADHD) או לקויות למידה.',
  'תלמידים שחווים תסכול או פערים לימודיים וזקוקים לחיזוק הביטחון העצמי.',
  'הכנה ממוקדת לקראת מעברים חשובים (כמו עלייה לכיתה א\' או חטיבת ביניים).',
] as const

const processSteps = [
  {
    step: '1',
    title: 'פגישת היכרות ומיפוי',
    description:
      'אבחון קצר של רמת התלמיד וזיהוי חוזקות ונקודות לחיזוק.',
  },
  {
    step: '2',
    title: 'בניית תוכנית עבודה אישית',
    description:
      'התאמת חומרי הלימוד וקצב ההתקדמות לצרכים הספציפיים של התלמיד.',
  },
  {
    step: '3',
    title: 'למידה חווייתית ומעקב',
    description:
      'שימוש בעזרים מגוונים, משחקים דידקטיים, ושקיפות מלאה מול ההורים לאורך כל הדרך.',
  },
] as const

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <div dir="rtl" lang="he" className="min-h-screen overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-lake-800 focus:shadow-lg"
      >
        דלג לתוכן הראשי
      </a>

      {/* Header / Hero */}
      <header className="relative isolate min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-learning.svg')",
          }}
          role="img"
          aria-label="ספרים ומשחקי למידה לילדים"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-transparent to-white/50" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-mist to-transparent" />

        <div className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col justify-center px-5 pb-24 pt-16 sm:px-8">
          <p className="animate-fade-up mb-4 text-sm font-medium tracking-wide text-lake-700 sm:text-base">
            מורה לחינוך מיוחד · הוראה מותאמת
          </p>

          <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold leading-[1.15] text-lake-950 sm:text-5xl md:text-6xl">
            כינרת שמם
          </h1>

          <p className="animate-fade-up-delay-1 mt-3 max-w-2xl text-lg font-semibold leading-relaxed text-lake-900 sm:text-xl md:text-2xl">
            מורה מומחית להוראה מותאמת וחינוך מיוחד
          </p>

          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            הקניית קריאה, כתיבה וקידום לימודי לכל הגילאים (מכיתות יסוד ועד
            הכנה לבגרות)
          </p>

          <div className="animate-fade-up-delay-3 mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] transition duration-200 hover:scale-[1.03] hover:bg-whatsapp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp active:scale-[0.98] sm:text-lg"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              שליחת הודעה לכינרת
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* About */}
        <section
          aria-labelledby="about-heading"
          className="bg-mist px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
            <img
              src="/kinneret.png"
              alt="כינרת שמם"
              width={220}
              height={220}
              className="h-40 w-40 shrink-0 rounded-[2rem] object-cover object-[center_18%] shadow-[0_16px_40px_rgba(26,83,96,0.12)] ring-4 ring-white sm:h-48 sm:w-48"
            />
            <div>
              <h2
                id="about-heading"
                className="text-2xl font-bold text-lake-900 sm:text-3xl"
              >
                קצת עליי
              </h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-sage-500" />

              <p className="mt-6 text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
                שלום! שמי כינרת, אני מורה לחינוך מיוחד עם תעודת הוראה לחינוך
                המיוחד, עובדת במערכת החינוך בתור מורת שילוב ומורת כו״ח ומעבירה
                שיעורים פרטיים למגוון גילאים מזה 8 שנים. מומחית בהוראה
                מותאמת-מקדמת.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Approach */}
        <section
          aria-labelledby="belief-heading"
          className="bg-lake-800 px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lake-100">
              <Quote className="h-6 w-6" aria-hidden />
            </div>
            <h2
              id="belief-heading"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              האני מאמין שלי
            </h2>
            <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-sage-500" />
            <blockquote className="mt-8 text-lg leading-8 text-lake-100 sm:text-xl sm:leading-9">
              אני מאמינה שכל ילד יכול להצליח ללמוד ולהתקדם, ברגע שמתאימים לו את
              הדרך הנכונה. מעבר להקניית החומר, המטרה שלי היא להחזיר לתלמידים את
              תחושת המסוגלות, לחזק את הביטחון העצמי שלהם, ולתת להם כלים להצלחה
              עצמאית.
            </blockquote>
          </div>
        </section>

        {/* Who is it for */}
        <section
          aria-labelledby="audience-heading"
          className="bg-surface px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="audience-heading"
              className="text-2xl font-bold text-lake-900 sm:text-3xl"
            >
              למי השיעורים מתאימים?
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-sage-500" />

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-3xl border border-lake-100 bg-lake-50/50 p-5 sm:p-6"
                >
                  <CheckCircle2
                    className="mt-0.5 h-6 w-6 shrink-0 text-sage-600"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-base leading-7 text-ink-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          className="bg-mist px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <h2
                id="process-heading"
                className="text-2xl font-bold text-lake-900 sm:text-3xl"
              >
                איך נראה תהליך העבודה?
              </h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-sage-500" />
            </div>

            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {processSteps.map(({ step, title, description }) => (
                <li
                  key={step}
                  className="relative rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(26,83,96,0.06)] sm:p-7"
                >
                  <span
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lake-700 text-xl font-extrabold text-white"
                    aria-hidden
                  >
                    {step}
                  </span>
                  <h3 className="text-lg font-bold text-lake-900 sm:text-xl">
                    <span className="sr-only">שלב {step}: </span>
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-ink-muted">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Expertise */}
        <section
          aria-labelledby="expertise-heading"
          className="bg-surface px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <h2
                id="expertise-heading"
                className="text-2xl font-bold text-lake-900 sm:text-3xl"
              >
                תחומי התמחות
              </h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-sage-500" />
              <p className="mt-4 text-base text-ink-muted sm:text-lg">
                ליווי אישי ומדויק, בהתאם לקצב ולצרכים של כל תלמיד ותלמידה.
              </p>
            </div>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {expertise.map(({ title, description, icon: Icon }) => (
                <li
                  key={title}
                  className="group rounded-3xl border border-lake-100 bg-lake-50/60 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-lake-500/25 hover:bg-white hover:shadow-[0_16px_40px_rgba(26,83,96,0.08)] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lake-100 text-lake-700 transition duration-200 group-hover:bg-lake-700 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-lake-900 sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-ink-muted">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing & Trust */}
        <section
          aria-labelledby="pricing-heading"
          className="bg-gradient-to-b from-lake-50 to-mist px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="pricing-heading"
              className="text-2xl font-bold text-lake-900 sm:text-3xl"
            >
              פרטים
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-sage-500" />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(26,83,96,0.06)] sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                  <Home className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-lake-900">מיקום השיעורים</h3>
                  <p className="mt-1 text-base leading-7 text-ink-muted">
                    השיעורים מתקיימים בבית המורה / שיעורים מרחוק
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl border border-sage-500/20 bg-sage-100/50 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sage-700 shadow-sm">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-lake-900">
                    <Sparkles className="h-4 w-4 text-sage-600" aria-hidden />
                    חשוב לדעת
                  </h3>
                  <p className="mt-1 text-base leading-7 text-ink-muted">
                    ישנן תעודות המוכרות לביטוחים הפרטיים להחזרים (בהתאם לתנאי
                    הפוליסה שלכם)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-5 text-ink-muted">לפרטים נוספים.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] transition duration-200 hover:scale-[1.03] hover:bg-whatsapp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                שליחת הודעה לכינרת
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-lake-100 bg-white px-5 py-8 text-center sm:px-8">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} כינרת שמם · הוראה מותאמת וחינוך מיוחד
        </p>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שליחת הודעה לכינרת בוואטסאפ"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition duration-200 hover:scale-110 hover:bg-whatsapp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <span
          className="animate-pulse-ring absolute inset-0 rounded-full bg-whatsapp"
          aria-hidden
        />
        <span
          className="animate-pulse-ring absolute inset-0 rounded-full bg-whatsapp [animation-delay:0.75s]"
          aria-hidden
        />
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  )
}
