import SectionHeader from '../components/SectionHeader'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CyclingIcon from '../components/CyclingIcon'

function CaseStudy() {
  return (
    <div>
      {/* HERO BANNER */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Video / PNG fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/banner.png"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        >
          <source src="/banner.mp4" type="video/mp4" />
          <img src="/banner.png" alt="Quest Log — Your fitness adventure" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </video>

        {/* Fade into page background at the bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, #FFFBF5 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* CTA + Badges + scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            zIndex: 2,
          }}
        >
          {/* View Live App CTA */}
          <a
            href="https://quest-log-case-study.vercel.app"
            className="btn-primary"
            style={{
              background: '#F97316',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 28px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 4px 0 0 #C2410C',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.1s ease, box-shadow 0.1s ease',
            }}
          >
            View Live App →
          </a>

          {/* Badges */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                background: '#FEF3C7',
                color: '#92400E',
                border: '1px solid #FCD34D',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: '0.78rem',
                borderRadius: '9999px',
                padding: '6px 14px',
              }}
            >
              🚧 Work in Progress
            </span>
            <span
              style={{
                background: 'rgba(245,245,244,0.92)',
                color: '#78716C',
                border: '1px solid #E7E5E4',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: '0.78rem',
                borderRadius: '9999px',
                padding: '6px 14px',
              }}
            >
              Personal Project · 2025–Present
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              style={{
                color: '#F97316',
                fontSize: '1.2rem',
                animation: 'bounce 2s infinite',
              }}
            >
              ↓
            </span>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 400,
                fontSize: '0.7rem',
                color: '#F97316',
              }}
            >
              scroll
            </span>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION SECTION */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        {/* PROBLEM BLOCK */}
        <SectionHeader label="THE PROBLEM" heading="Fitness tracking feels like doing your taxes." />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            marginTop: '48px',
          }}
          className="problem-grid"
        >
          <div style={{ maxWidth: '540px' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#57534E',
                fontSize: '1rem',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}
            >
              Most fitness apps treat you like a data entry clerk. Log your reps, log your weight, close the app. There's nothing pulling you back tomorrow except willpower — and willpower is not a product feature. The tools that exist either drown you in analytics you don't use or reduce your entire training session to a checkbox.
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#57534E',
                fontSize: '1rem',
                lineHeight: 1.75,
              }}
            >
              The problem isn't motivation. It's that the experience of tracking has no texture to it. Nothing makes it feel like progress. Nothing makes you feel like the kind of person who shows up. It's admin. And admin is easy to skip.
            </p>
          </div>
          <ImagePlaceholder aspectRatio="3/4" caption="The before state. A spreadsheet that doesn't care if you come back." />
        </div>

        {/* SOLUTION BLOCK */}
        <div style={{ marginTop: '80px' }}>
          <SectionHeader label="THE SOLUTION" heading="What if your gym session felt like a quest?" />

          <div style={{ marginTop: '48px' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#57534E',
                fontSize: '1rem',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}
            >
              Quest Log reframes the gym as a game world you're physically progressing through. Every workout completed is a quest cleared. Every session adds XP. Your streak is a resource you protect. The journey map — a hand-illustrated RPG world — advances as you train. You're not logging reps. You're pushing deeper into new territory.
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#57534E',
                fontSize: '1rem',
                lineHeight: 1.75,
              }}
            >
              The aesthetic direction was deliberate. Warm illustration over dark pixel art. Chunky, rounded UI over clinical dashboards. The design borrows from games like Moonlighter and apps like Duolingo — things people open because they want to, not because they have to. The goal was to make the gym feel like somewhere your character needs to be.
            </p>
          </div>

          {/* Art Direction callout */}
          <div
            style={{
              marginTop: '32px',
              background: '#FEF9EE',
              border: '1px solid #D97706',
              borderLeft: '4px solid #F97316',
              borderRadius: '0 12px 12px 0',
              padding: '20px 24px',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                color: '#1C1009',
                fontSize: '0.95rem',
                margin: 0,
              }}
            >
              ✦ Art Direction Note
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#78716C',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginTop: '8px',
              }}
            >
              Warm oranges. Chunky rounded UI. Illustration over pixel art. The visual decision was intentional — approachable, not intimidating. The gym is already hard enough. The app shouldn't be.
            </p>
          </div>

          {/* Masonry image grid */}
          <div
            style={{
              marginTop: '48px',
              columns: '2',
              columnGap: '16px',
            }}
            className="masonry-grid"
          >
            {[
              { aspectRatio: '4/5', caption: 'Quest Builder — Warm-Up / Main / Cool-Down' },
              { aspectRatio: '3/4', caption: 'Journey Map — Iron Field Woods region' },
              { aspectRatio: '4/5', caption: 'My Stash — Supplement inventory' },
              { aspectRatio: '1/1', caption: 'Quest Complete — Coin reward sequence' },
              { aspectRatio: '3/4', caption: 'Rest Day — Slot machine' },
              { aspectRatio: '4/5', caption: 'Stats Bar — Streak, coins, total workouts' },
            ].map((item, i) => (
              <ImagePlaceholder
                key={i}
                aspectRatio={item.aspectRatio}
                caption={item.caption}
                className="masonry-item"
              />
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section
        style={{
          background: '#FEF9EE',
          padding: '80px 24px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader label="KEY FEATURES" heading="Built to feel like a game you're actually playing." />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px',
              marginTop: '48px',
            }}
            className="features-grid"
          >
            {[
              {
                accent: '#F97316',
                icon: '',
                title: 'Custom Quest Builder',
                wip: false,
                video: null,
                iconCycle: [
                  { src: '/icons/quest-sword.png', srcSet: '/icons/quest-sword.png 1x, /icons/quest-sword@2x.png 2x, /icons/quest-sword@3x.png 3x', alt: 'Sword' },
                  { src: '/icons/quest-shield.png', srcSet: '/icons/quest-shield.png 1x, /icons/quest-shield@2x.png 2x, /icons/quest-shield@3x.png 3x', alt: 'Shield' },
                  { src: '/icons/quest-bow.png', srcSet: '/icons/quest-bow.png 1x, /icons/quest-bow@2x.png 2x, /icons/quest-bow@3x.png 3x', alt: 'Bow' },
                  { src: '/icons/quest-shoe.png', srcSet: '/icons/quest-shoe.png 1x, /icons/quest-shoe@2x.png 2x, /icons/quest-shoe@3x.png 3x', alt: 'Shoe' },
                  { src: '/icons/quest-weight.png', srcSet: '/icons/quest-weight.png 1x, /icons/quest-weight@2x.png 2x, /icons/quest-weight@3x.png 3x', alt: 'Weight' },
                  { src: '/icons/quest-boxing.png', srcSet: '/icons/quest-boxing.png 1x, /icons/quest-boxing@2x.png 2x, /icons/quest-boxing@3x.png 3x', alt: 'Boxing' },
                ],
                description: 'Build any workout from scratch across three phases — Warm-Up, Main, and Cool-Down. Saved as reusable templates, not one-time checklists. Run the same quest a hundred times or build a new one every session.',
              },
              {
                accent: '#65A30D',
                icon: '',
                title: 'My Stash',
                wip: false,
                video: '/videos/potions3.mp4',
                description: 'Track your supplements like an in-game inventory. Visual stock levels, custom icons, and a quick daily log. Running low shows visually before you run out. Your pre-workout is basically a health potion.',
              },
              {
                accent: '#EAB308',
                icon: '',
                title: 'Gold Coins & Rewards',
                wip: true,
                video: '/videos/treasure.mp4',
                videoPoster: '/videos/treasure.png',
                description: 'Complete a quest, earn coins. Take a rest day, pull the slot machine for a chance at bonus gold. Coins will unlock in-game rewards as the currency system develops. The economy is still being designed.',
              },
              {
                accent: '#0EA5E9',
                icon: '',
                title: 'Journey Map',
                wip: true,
                video: null,
                staticImage: '/icons/nav-map.png',
                staticImageSize: 120,
                description: 'Your progress visualised as a hand-illustrated RPG world. Each region is a new zone unlocked through consistent training. Six regions planned — Iron Field Woods, Plains of Sorrows, Emberveil Peaks, Skullpeak Glaciers, Sunken Ruins of Aldara, Stormreach Cliffs.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  background: 'white',
                  border: '1px solid #E7E5E4',
                  borderTop: `4px solid ${card.accent}`,
                  borderRadius: '16px',
                  boxShadow: '0 4px 0 0 rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
              >
                <div className="card-inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Media area */}
                  <div className="card-media" style={{
                    minHeight: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: 'white',
                  }}>
                    {card.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={'videoPoster' in card ? card.videoPoster as string : undefined}
                        style={{ maxHeight: '100%', maxWidth: '80%', width: 'auto', display: 'block', borderRadius: '12px' }}
                      >
                        <source src={card.video} type="video/mp4" />
                      </video>
                    ) : 'iconCycle' in card && card.iconCycle ? (
                      <CyclingIcon images={card.iconCycle} interval={2000} size={140} />
                    ) : 'staticImage' in card && card.staticImage ? (
                      <img
                        src={card.staticImage as string}
                        alt=""
                        style={{ maxHeight: '100%', maxWidth: '80%', objectFit: 'contain', display: 'block' }}
                      />
                    ) : null}
                  </div>

                  <div className="card-content" style={{ padding: '28px', flex: 1 }}>
                  {card.icon && (
                    <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '14px' }}>
                      {card.icon}
                    </span>
                  )}
                  <p
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 700,
                      color: '#1C1009',
                      fontSize: '1.05rem',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      color: '#78716C',
                      fontSize: '0.88rem',
                      lineHeight: 1.65,
                      marginTop: '8px',
                      marginBottom: 0,
                    }}
                  >
                    {card.description}
                  </p>
                  {card.wip && (
                    <span
                      style={{
                        display: 'inline-flex',
                        background: '#FEF3C7',
                        color: '#92400E',
                        border: '1px solid #FCD34D',
                        borderRadius: '9999px',
                        padding: '3px 10px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        marginTop: '12px',
                      }}
                    >
                      ✦ WIP
                    </span>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section
        style={{
          background: '#FFFBF5',
          padding: '80px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <SectionHeader label="KEY CHALLENGES" heading="The hard parts nobody talks about." />

        <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            {
              number: '01',
              title: 'Making gamification feel earned, not gimmicky.',
              body: 'Coins and XP only work if the underlying tracking tool is solid. The risk with gamification is that it papers over a bad product with candy. The approach here was to build the workout builder as a clean, functional tool first — then layer rewards on top. The game mechanics only feel satisfying because the core loop is actually useful.',
            },
            {
              number: '02',
              title: 'Designing for one user: yourself.',
              body: "No user research. No testing sessions. No feedback rounds. The loop is: build it, use it at the gym the next morning, adjust what broke. That's faster than any process I've run on a team — but you have to be ruthless about catching your own blind spots. The things that feel obvious to you are invisible to everyone else.",
            },
            {
              number: '03',
              title: 'Generating illustration assets without a design system handoff.',
              body: "Every icon, banner, and region tile is generated externally and manually integrated into the codebase. There's no Figma-to-code pipeline. Maintaining visual consistency across AI-generated assets — different sessions, different tools — requires opinionated constraints upfront: fixed aspect ratios, a strict color palette, and a reference image you don't deviate from.",
            },
          ].map((challenge, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                border: '1px solid #E7E5E4',
                borderLeft: '4px solid #F97316',
                borderRadius: '0 16px 16px 0',
                padding: '28px 32px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  color: '#F97316',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                CHALLENGE {challenge.number}
              </p>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  color: '#1C1009',
                  fontSize: '1.05rem',
                  marginTop: '6px',
                }}
              >
                {challenge.title}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  color: '#78716C',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  marginTop: '10px',
                }}
              >
                {challenge.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S NEXT SECTION */}
      <section
        style={{
          background: '#FEF9EE',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionHeader label="WHAT'S NEXT" heading="This is a living project." centered={true} />

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: '#57534E',
              fontSize: '1rem',
              lineHeight: 1.75,
              textAlign: 'center',
              maxWidth: '540px',
              margin: '24px auto 48px',
            }}
          >
            Quest Log is a personal tool first. It ships when it's ready, not when it's perfect. The features below represent where the build stands today and where it's heading. The map is still being drawn.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
            }}
            className="roadmap-grid"
          >
            {/* Currently Shipped */}
            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: '#1C1009',
                  fontSize: '1rem',
                  marginBottom: '16px',
                }}
              >
                Currently Shipped
              </p>
              {[
                'Quest builder with Warm-Up / Main / Cool-Down',
                'Supplement inventory (My Stash)',
                'Gold coin reward system + animated coin sequence',
                'Rest day slot machine',
                'Journey map — first region live',
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    color: '#57534E',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ color: '#F97316', marginRight: '10px', flexShrink: 0 }}>✦</span>
                  {item}
                </p>
              ))}
            </div>

            {/* On the Horizon */}
            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: '#A8A29E',
                  fontSize: '1rem',
                  marginBottom: '16px',
                }}
              >
                On the Horizon
              </p>
              {[
                'Cloud sync via Google Sign-In + Firestore',
                'Hero character progression + avatar',
                'Micro-animations and polish pass',
                'All six journey map regions fully built',
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    color: '#A8A29E',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ color: '#A8A29E', marginRight: '10px', flexShrink: 0 }}>✦</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p
            style={{
              marginTop: '48px',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#A8A29E',
              fontSize: '0.9rem',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Quest Log is being built in parallel with real gym sessions. Every feature ships because it was needed on a Tuesday morning at 6am, not because it was on a roadmap.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: '#1C1009',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <img
          src="/logo/logo_horz.png"
          srcSet="/logo/logo_horz.png 1x, /logo/logo_horz@2x.png 2x, /logo/logo_horz@3x.png 3x"
          alt="Quest Log"
          style={{
            height: '48px',
            width: 'auto',
            display: 'block',
            margin: '0 auto',
          }}
        />
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: '#A8A29E',
            fontSize: '0.82rem',
            marginTop: '8px',
          }}
        >
          Designed & developed by Kevin Chow · 2025–Present
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '32px',
          }}
        >
          <a
            href="https://quest-log-case-study.vercel.app"
            className="btn-primary"
            style={{
              background: '#F97316',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 28px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 4px 0 0 #C2410C',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.1s ease, box-shadow 0.1s ease',
            }}
          >
            View Live App →
          </a>
          <a
            href="mailto:hello@kevincchow.com"
            className="btn-secondary"
            style={{
              background: 'transparent',
              color: '#F97316',
              border: '2px solid #F97316',
              borderRadius: '12px',
              padding: '14px 28px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.15s ease',
            }}
          >
            Get in Touch
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes iconFadeIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 16px;
        }
        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 0 0 rgba(0,0,0,0.07) !important;
        }
        @media (min-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .masonry-grid {
            columns: 3 !important;
          }
          .features-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .card-inner {
            flex-direction: row !important;
          }
          .card-media {
            width: 45%;
            min-height: unset !important;
            align-self: stretch;
          }
          .card-content {
            border-left: 1px solid #F5F5F4;
          }
          .roadmap-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          section[style] {
            padding: 60px 20px;
          }
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 0 0 #C2410C !important;
        }
        .btn-primary:active {
          transform: translateY(2px);
          box-shadow: 0 2px 0 0 #C2410C !important;
        }
        .btn-secondary:hover {
          background: rgba(249,115,22,0.08) !important;
        }
      `}</style>
    </div>
  )
}

export default CaseStudy
