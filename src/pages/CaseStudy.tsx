import SectionHeader from '../components/SectionHeader'
import CyclingIcon from '../components/CyclingIcon'
import ScreenshotCarousel from '../components/ScreenshotCarousel'

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
          className="hero-fade"
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
          className="hero-overlay"
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
            href="https://quest-log-topaz.vercel.app/"
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
            className="hero-badges"
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <img
                src="/icons/icon-pickaxec.png"
                srcSet="/icons/icon-pickaxec.png 1x, /icons/icon-pickaxec@2x.png 2x, /icons/icon-pickaxec@3x.png 3x"
                alt=""
                style={{ width: '14px', height: '14px', objectFit: 'contain', display: 'block' }}
              />
              Work in Progress
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
              Personal Project
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
              Most fitness apps treat you like a data entry clerk. Log your reps, log your weight, close the app. There's nothing pulling you back tomorrow except willpower, and willpower is not a product feature. The tools that exist either drown you in analytics you don't use or reduce your entire training session to a checkbox.
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
          <div>
            <img
              src="/screenshots/homescreen.png"
              alt="Quest Log home screen"
              style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '16px', display: 'block', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', margin: '0 auto' }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#78716C',
              fontSize: '0.82rem',
              marginTop: '10px',
              marginBottom: 0,
              lineHeight: 1.6,
            }}>
              Using Excel or standard workout apps is stale and lifeless. Tracking reps in a spreadsheet makes fitness feel like admin work, not an adventure.
            </p>
          </div>
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
              What if we started thinking about exercise, health, and fitness more like a game? One where you are the main character, and every time you train, eat well, or make a positive health choice, you are getting stronger and leveling up. Because that is essentially what is happening. Your body is keeping score whether you track it or not.
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
              Quest Log makes that progress visible and exciting. Goals and milestones become checkpoints. Streaks become a resource worth protecting. The journey map advances as you train, so you can put a pin on where you actually are, not just stare at a screen full of numbers. You are not logging reps. You are building a character.
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
              Warm oranges. Chunky rounded UI. Illustration over pixel art. The visual decision was intentional: approachable, not intimidating. The gym is already hard enough. The app shouldn't be.
            </p>
          </div>

          {/* Screenshot carousel */}
          <ScreenshotCarousel slides={[
            { src: '/screenshots/Quest example.jpg', caption: 'Quest Builder: Warm-Up, Main and Cool-Down' },
            { src: '/screenshots/quest board screenshot.jpg', caption: 'Quest Board: active quests' },
            { src: '/screenshots/Inventory.jpg', caption: 'My Stash: supplement inventory' },
            { src: '/screenshots/active set 2.jpg', caption: 'Active Workout: exercise tracking' },
            { src: '/screenshots/active break.jpg', caption: 'Active Break: built-in rest timer' },
            { src: '/screenshots/Spin screenshot.jpg', caption: 'Rest Day: spin for Swoll Coins' },
            { src: '/screenshots/excel.jpg', caption: 'Using Excel or standard workout apps is stale and lifeless. Tracking reps in a spreadsheet makes fitness feel like admin work, not an adventure.' },
          ]} />
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
                shipped: true,
                video: null,
                iconCycle: [
                  { src: '/icons/quest-sword.png', srcSet: '/icons/quest-sword.png 1x, /icons/quest-sword@2x.png 2x, /icons/quest-sword@3x.png 3x', alt: 'Sword' },
                  { src: '/icons/quest-shield.png', srcSet: '/icons/quest-shield.png 1x, /icons/quest-shield@2x.png 2x, /icons/quest-shield@3x.png 3x', alt: 'Shield' },
                  { src: '/icons/quest-bow.png', srcSet: '/icons/quest-bow.png 1x, /icons/quest-bow@2x.png 2x, /icons/quest-bow@3x.png 3x', alt: 'Bow' },
                  { src: '/icons/quest-shoe.png', srcSet: '/icons/quest-shoe.png 1x, /icons/quest-shoe@2x.png 2x, /icons/quest-shoe@3x.png 3x', alt: 'Shoe' },
                  { src: '/icons/quest-weight.png', srcSet: '/icons/quest-weight.png 1x, /icons/quest-weight@2x.png 2x, /icons/quest-weight@3x.png 3x', alt: 'Weight' },
                  { src: '/icons/quest-boxing.png', srcSet: '/icons/quest-boxing.png 1x, /icons/quest-boxing@2x.png 2x, /icons/quest-boxing@3x.png 3x', alt: 'Boxing' },
                ],
                description: 'Build any workout from scratch across three phases: Warm-Up, Main, and Cool-Down. Saved as reusable templates, not one-time checklists. Run the same quest a hundred times or build a new one every session.',
              },
              {
                accent: '#65A30D',
                icon: '',
                title: 'My Stash',
                wip: false,
                shipped: true,
                video: '/videos/potions3.mp4',
                description: 'Track your supplements like an in-game inventory. Visual stock levels, custom icons, and a quick daily log. Running low shows visually before you run out. Your pre-workout is basically a health potion.',
              },
              {
                accent: '#EAB308',
                icon: '',
                title: 'Gold Coins & Rewards',
                wip: false,
                shipped: true,
                video: '/videos/treasure.mp4',
                videoPoster: '/videos/treasure.png',
                description: 'Complete a quest, earn coins. Take a rest day, pull the slot machine for a chance at bonus gold. Coins will unlock in-game rewards as the currency system develops. The economy is still being designed.',
              },
              {
                accent: '#0EA5E9',
                icon: '',
                title: 'Journey Map',
                wip: true,
                video: '/videos/Regionpreviews.mp4',
                description: 'Your fitness journey is now more than just gains. Each session pushes you deeper into a virtual world, unlocking new regions as you train. Two journeys in one.',
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
                        alignItems: 'center',
                        gap: '5px',
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
                      <img
                        src="/icons/icon-pickaxec.png"
                        srcSet="/icons/icon-pickaxec.png 1x, /icons/icon-pickaxec@2x.png 2x, /icons/icon-pickaxec@3x.png 3x"
                        alt=""
                        style={{ width: '12px', height: '12px', objectFit: 'contain', display: 'block' }}
                      />
                      WIP
                    </span>
                  )}
                  {'shipped' in card && card.shipped && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: '#F0FDF4',
                        color: '#166534',
                        border: '1px solid #86EFAC',
                        borderRadius: '9999px',
                        padding: '3px 10px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        marginTop: '12px',
                      }}
                    >
                      <img
                        src="/icons/icon-checkmark.png"
                        srcSet="/icons/icon-checkmark.png 1x, /icons/icon-checkmark@2x.png 2x, /icons/icon-checkmark@3x.png 3x"
                        alt=""
                        style={{ width: '12px', height: '12px', objectFit: 'contain', display: 'block' }}
                      />
                      Shipped
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
              body: 'Every part of the product needs its own answer to the same question: why would anyone actually enjoy doing this? Logging a workout is easy to make engaging. But what about tracking which supplements are sitting in your cupboard at home? That is a genuinely boring task. The design challenge was figuring out how to inject enough personality, visual feedback, and reward into the mundane parts so that the whole system feels worth returning to. Dopamine is not just for the big moments. The goal was to make even the small interactions feel like they counted.',
            },
            {
              number: '02',
              title: 'Designing for one user: yourself.',
              body: "This app is not being tested against flat Figma slides in a conference room. It is being tested in real time, mid-workout, under actual conditions. The research loop is guerrilla: build it, take it to the gym, use it yourself, then hand your phone to the person on the next bench and watch what happens. Gym friends were the first testers. Then regulars at the local gym. Conversations on the floor, honest reactions, friction spotted in the moment. So far six other gym members are actively using Quest Log and that number is growing. Real users, real sessions, real feedback.",
            },
            {
              number: '03',
              title: 'Generating illustration assets without a design system handoff.',
              body: "Every icon, banner, and region tile is generated externally and manually integrated into the codebase. There's no Figma-to-code pipeline. Maintaining visual consistency across AI-generated assets from different sessions and tools requires opinionated constraints upfront: fixed aspect ratios, a strict color palette, and a reference image you don't deviate from.",
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

      {/* DUNGEON GYM SECTION */}
      <section
        style={{
          background: '#FEF9EE',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="dungeon-grid"
        >
          <div>
            <SectionHeader label="SWOLL COINS" heading="Spend your earnings. Build your dungeon." />
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#57534E',
                fontSize: '1rem',
                lineHeight: 1.75,
                marginTop: '24px',
                marginBottom: '16px',
              }}
            >
              Every quest completed earns Swoll Coins, and they have a purpose beyond the scoreboard. One of the planned uses is your Dungeon Gym: a personal training space inside the game world that starts bare and gets upgraded as you invest in it.
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
              Spend coins to add equipment, unlock new zones, and customise the aesthetic of your gym. The screenshot shows a before and after. Same space, different investment. The goal is to make progress feel tangible beyond rep counts and streak numbers.
            </p>
            <div
              style={{
                marginTop: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FEF3C7',
                border: '1px solid #FCD34D',
                borderRadius: '9999px',
                padding: '6px 14px',
              }}
            >
              <img src="/icons/icon-swollcoin.png" alt="Swoll Coin" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#92400E' }}>
                Swoll Coins · Planned Feature
              </span>
            </div>
          </div>

          <img
            src="/screenshots/dungeongym.png"
            alt="Dungeon Gym — before and after upgrade"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* WHAT'S NEXT SECTION */}
      <section
        style={{
          background: '#FFFBF5',
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
                'Supplement inventory (My Stash): stock levels tracked as Stocked, Low, and Out, with external URLs for quick re-ordering (e.g. Amazon)',
                'Swoll Coins reward system: earn coins on quest completion with an animated coin sequence',
                'Built-in timer for prep time, breaks, and isometric holds with audio cues',
                'Rest day rewards: slot machine mechanics to spin for Swoll Coins on off days, preserving streaks',
                'Active workout tab that displays the currently running workout in real time',
                'Exercise order reshuffling and in-quest editing',
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
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <img
                    src="/icons/icon-checkmark.png"
                    srcSet="/icons/icon-checkmark.png 1x, /icons/icon-checkmark@2x.png 2x, /icons/icon-checkmark@3x.png 3x"
                    alt=""
                    style={{ width: '16px', height: '16px', objectFit: 'contain', display: 'block', flexShrink: 0, marginTop: '3px' }}
                  />
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
                'Journey map: first region live',
                'Cloud sync via Google Sign-In + Firestore',
                'Hero character progression + avatar',
                'Micro-animations and polish pass',
                'All six journey map regions fully built',
                'Regional shops: spend Swoll Coins on outfits and gear',
                'Dungeon Gym: buy and upgrade your personal training space using Swoll Coins',
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

        </div>
      </section>

      {/* CONCEPT ART SECTION */}
      <section style={{ background: '#FFFBF5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader label="CONCEPT ART" heading="The journey map is coming." />
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: '#57534E',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginTop: '24px',
              maxWidth: '600px',
            }}
          >
            Each region of the journey map represents a new zone unlocked through consistent training. These are early concept pieces exploring the visual direction for regions still in development. The goal is a world that feels alive and worth pushing into.
          </p>

          <ScreenshotCarousel
            maxWidth="65%"
            slides={[
              { src: '/journeymap/Frame 5.png', caption: 'Haunted Marshes · Emberveil Peaks' },
              { src: '/journeymap/Frame 6.png', caption: 'Aquasword Fields · Field of Bones' },
              { src: '/journeymap/Frame 8.png', caption: 'Ancient Sands · Crystal Caverns' },
              { src: '/journeymap/Frame 9.png', caption: 'Ruined Wastes · Sunken Depths' },
              { src: '/journeymap/Frame 10.png', caption: 'Flowerfield Vale · Skullpeak Glaciers' },
            ]}
          />
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
          Designed & developed by Kevin Chow
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
            href="https://quest-log-topaz.vercel.app/"
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
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          color: '#78716C',
          fontSize: '0.82rem',
          marginTop: '20px',
          marginBottom: 0,
        }}>
          <a href="mailto:hello@kevincchow.com" style={{ color: '#78716C', textDecoration: 'none' }}>
            hello@kevincchow.com
          </a>
        </p>
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
          .dungeon-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          section[style] {
            padding: 60px 20px;
          }
          .hero-overlay {
            position: static !important;
            background: #FFFBF5;
            padding: 20px 16px 4px;
            margin-bottom: -24px;
          }
          .hero-fade {
            display: none;
          }
          .hero-badges {
            flex-direction: column !important;
            align-items: center !important;
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
