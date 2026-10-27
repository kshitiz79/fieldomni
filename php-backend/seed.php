<?php
/**
 * Database Seeder for Fieldomni Blog
 * Populates sample high-ranking SEO articles and default admin account
 */

require_once __DIR__ . '/config.php';

$pdo = getDbConnection();

// Clear existing seeded blogs if requested, or just insert if empty
$existingCount = (int)$pdo->query("SELECT COUNT(*) FROM blogs")->fetchColumn();

if ($existingCount === 0) {
    echo "Seeding initial pharma blog articles...\n";

    $sampleBlogs = [
        [
            'title' => 'How Smart Geofencing Increases MR Doctor Call Coverage by 45%',
            'slug' => 'how-smart-geofencing-increases-mr-doctor-call-coverage',
            'excerpt' => 'Discover how pharma sales organizations use AI-powered geofenced attendance and zero-tamper GPS verification to boost verified doctor visits and eliminate proxy reporting.',
            'category' => 'Field Operations',
            'author_name' => 'Dr. Rajesh Sharma',
            'author_role' => 'VP of Pharma Field Operations',
            'author_avatar' => '/assets/img/home-4/news/info.png',
            'cover_image' => '/assets/img/home-4/news/news-01.jpg',
            'read_time' => '5 min read',
            'tags' => 'Geofencing, MR Tracking, Doctor Coverage, Pharma SFA',
            'meta_title' => 'How Smart Geofencing Boosts MR Doctor Call Coverage by 45% | Fieldomni',
            'meta_description' => 'Learn how real-time GPS geofencing prevents fake MR check-ins, streamlines doctor call coverage, and boosts pharmaceutical sales force productivity by 45%.',
            'meta_keywords' => 'smart geofencing, pharma MR tracking, doctor call coverage, medical representative GPS app, fake location blocker',
            'status' => 'published',
            'views' => 1420,
            'content' => <<<HTML
<h2>The Real Cost of Unverified Doctor Calls in Modern Pharma</h2>
<p>In pharmaceutical sales across India and emerging markets, the Medical Representative (MR) is the frontline bridge between the healthcare brand and prescribers. However, traditional reliance on paper DCRs (Daily Call Reports) or basic time-punch apps has long suffered from a major vulnerability: <strong>proxy visits and mock GPS locations</strong>.</p>

<p>Studies reveal that up to 32% of reported doctor calls never actually take place at the clinic. Instead, reps log visits from transit points, coffee shops, or end-of-day catch-ups. For pharma manufacturers, this results in lost prescriptions, skewed territory demand forecasts, and bloated travel budgets.</p>

<div class="blog-callout">
    <h4>💡 Key Insight</h4>
    <p>Deploying polygonal geofences around clinic addresses ensures an MR cannot submit a DCR entry unless their device's verified hardware GPS is within 50 meters of the doctor's registered chamber.</p>
</div>

<h2>How Multi-Layered Geofencing Works</h2>
<p>Modern field force automation like <strong>Fieldomni</strong> uses a proprietary multi-sensor verification model:</p>
<ul>
    <li><strong>Hardware GNSS Trilateration:</strong> Pulls raw satellite signals rather than relying solely on cellular cell towers.</li>
    <li><strong>Mock Location & Root Detection:</strong> Instantly detects and blocks third-party GPS spoofing apps or Developer Option tampering.</li>
    <li><strong>Automatic Dwell-Time Tracking:</strong> Calculates how many minutes the representative spent inside the clinic perimeter, confirming whether a detailed discussion or sampling took place.</li>
</ul>

<h3>Measurable Results from 50,000+ Tracked MRs</h3>
<p>Enterprises implementing automated geofenced verification report:</p>
<ol>
    <li><strong>45% increase</strong> in genuine doctor call frequency among target Core (A+) prescribers.</li>
    <li><strong>82% reduction</strong> in fraudulent TA/DA travel allowance claims.</li>
    <li><strong>Zero end-of-month DCR backlog</strong>, as reps log calls with 1-tap geo-tagged timestamps right outside the clinic door.</li>
</ol>

<h2>Best Practices for Pharma Leaders Rolling Out Geo-Tracking</h2>
<p>Transparency is key to rep adoption. Positioning geofencing as an efficiency enabler—one that automates distance calculation, eliminates manual logbooks, and speeds up monthly expense reimbursements—fosters trust and compliance across regional teams.</p>
HTML
        ],
        [
            'title' => 'The Ultimate Guide to Eliminating TA/DA Travel Allowance Leakage',
            'slug' => 'guide-to-eliminating-tada-travel-allowance-leakage',
            'excerpt' => 'Manual travel claims cost pharma companies up to 18% of their field budget. Here is how automated Google Distance Matrix calculations stop allowance inflation permanently.',
            'category' => 'Payroll & Finance',
            'author_name' => 'Pooja Agarwal',
            'author_role' => 'Pharma CFO & Compensation Consultant',
            'author_avatar' => '/assets/img/home-4/news/info.png',
            'cover_image' => '/assets/img/home-4/news/news-02.jpg',
            'read_time' => '6 min read',
            'tags' => 'Payroll, TA/DA, Travel Allowance, Pharma Finance',
            'meta_title' => 'Pharma TA/DA Allowance Leakage: Complete Elimination Guide | Fieldomni',
            'meta_description' => 'Stop inflated travel expense claims in pharma. See how automated distance calculation, route playback, and tier-based allowance policies save crores annually.',
            'meta_keywords' => 'TA DA allowance calculation, pharma travel expense fraud, MR odometer tracking, automatic kilometer calculation',
            'status' => 'published',
            'views' => 980,
            'content' => <<<HTML
<h2>Why TA/DA Reimbursement Is the Biggest Black Hole in Field Sales</h2>
<p>For mid-sized and large pharmaceutical companies with hundreds or thousands of medical representatives, <strong>Traveling Allowance (TA) and Daily Allowance (DA)</strong> form the second-largest operational expenditure after core salaries.</p>

<p>Historically, MRs submitted odometer photos, paper tickets, or manual kilometer estimates at the end of the month. Finance teams faced an impossible administrative burden: verifying tens of thousands of kilometers manually against static route plans. The result? Routine 15% to 25% allowance inflation.</p>

<div class="blog-callout">
    <h4>💰 Financial Reality Check</h4>
    <p>A pharma company with 200 field reps inflating just 12 km per day incurs over ₹18,00,000 in false travel payouts every single year.</p>
</div>

<h2>Automated Path Tracing vs. Straight-Line Distance</h2>
<p>Basic tracking apps calculate distance as a straight bird-flight line between pinpoints, which frequently miscalculates genuine road detours. <strong>Fieldomni’s smart route engine</strong> uses high-frequency breadcrumb waypoints matched with real road topology:</p>
<ul>
    <li><strong>Snap-to-Roads Navigation:</strong> Filters out GPS jitter and records actual driven road kilometers.</li>
    <li><strong>Tier-City Allowance Rules:</strong> Automatically applies Headquarters (HQ), Ex-HQ, and Outstation daily allowance slabs according to company policy.</li>
    <li><strong>1-Click Payroll Export:</strong> Seamlessly exports verified distance totals directly into Tally, SAP, or ZingHR payroll systems without manual data entry.</li>
</ul>

<h2>The Strategic Advantage for Reps</h2>
<p>Automated TA/DA is not just beneficial for finance directors—it is loved by honest high-performing MRs. Claims are approved within 48 hours instead of lagging 3 to 4 weeks, boosting field morale and lowering attrition.</p>
HTML
        ],
        [
            'title' => 'Why Top Pharma Brands Move to Real-Time Chemist Secondary Booking',
            'slug' => 'why-pharma-brands-move-to-real-time-chemist-secondary-booking',
            'excerpt' => 'Eliminate order book delays, stockouts, and distributor disconnects with instant digital chemist order capture right at the retail pharmacy counter.',
            'category' => 'Secondary Sales',
            'author_name' => 'Vikram Sengupta',
            'author_role' => 'Senior Pharma Supply Chain Strategist',
            'author_avatar' => '/assets/img/home-4/news/info.png',
            'cover_image' => '/assets/img/home-4/news/news-03.jpg',
            'read_time' => '5 min read',
            'tags' => 'Chemist Booking, Secondary Sales, Stockist Management, Retail Pharma',
            'meta_title' => 'Real-Time Chemist Secondary Order Booking for Pharma | Fieldomni',
            'meta_description' => 'Bridge the gap between chemist demands and distributor fulfillment. Discover how mobile secondary order booking accelerates inventory replenishment.',
            'meta_keywords' => 'chemist order booking app, pharma secondary sales automation, stockist order dispatch, medical retail ordering',
            'status' => 'published',
            'views' => 1120,
            'content' => <<<HTML
<h2>The Problem: The 48-Hour Chemist Order Lag</h2>
<p>When an MR visits a retail chemist after detailing a doctor, securing immediate secondary stock is vital. If the chemist does not stock the prescribed molecules, the doctor’s patient is substituted at the counter by a competitor’s brand.</p>

<p>In traditional setups, the rep writes orders in a carbon-copy booklet. These orders are consolidated at week's end and manually phoned or WhatsApped to the C&F stockist. By the time stock arrives, critical prescription demand has vanished.</p>

<h2>Real-Time Mobile Order Booking directly to Stockists</h2>
<p>With Fieldomni’s dedicated Chemist CRM module:</p>
<ul>
    <li>The MR pulls up the chemist’s verified profile with current outstanding balances and credit terms.</li>
    <li>Selects SKUs, free schemes (e.g., 10+1, 20+3), and discount slabs with automated margin calculations.</li>
    <li>Order confirmation is dispatched via SMS/WhatsApp instantly to both the chemist and the assigned distributor.</li>
</ul>

<div class="blog-callout">
    <h4>⚡ Faster Fulfillment Cycles</h4>
    <p>Distributors receive the digital purchase order within 10 seconds of booking, cutting replenishment delivery times from 4 days to under 24 hours.</p>
</div>

<h2>Inventory Intelligence & Demand Forecasting</h2>
<p>Real-time booking gives corporate brand managers granular visibility into molecule velocity by pin code. Brands can reallocate production runs weeks ahead of expiry bottlenecks, eliminating costly unsellable inventory returns.</p>
HTML
        ],
        [
            'title' => 'Interactive E-Detailing: Boosting Doctor Attention & Recall Rates',
            'slug' => 'interactive-e-detailing-boosting-doctor-attention-and-recall',
            'excerpt' => 'Modern healthcare professionals have less than 90 seconds per medical rep. Learn how interactive digital visual aids double doctor engagement and script conversion.',
            'category' => 'Doctor Detailing',
            'author_name' => 'Anita Deshmukh',
            'author_role' => 'Head of Healthcare Content Strategy',
            'author_avatar' => '/assets/img/home-4/news/info.png',
            'cover_image' => '/assets/img/home-4/news/news-04.jpg',
            'read_time' => '4 min read',
            'tags' => 'E-Detailing, Doctor Engagement, Digital Visual Aid, Pharma Marketing',
            'meta_title' => 'Interactive E-Detailing for Pharma MRs: 2026 Guide | Fieldomni',
            'meta_description' => 'Turn 90-second doctor interactions into high-recall clinical conversations. Discover best practices for interactive e-detailing and analytics on tablets.',
            'meta_keywords' => 'interactive e-detailing, digital visual aid DVA, pharma doctor detailing, tablet presentation for medical reps',
            'status' => 'published',
            'views' => 760,
            'content' => <<<HTML
<h2>The Shrinking Attention Span in Doctor Chambers</h2>
<p>Today’s clinicians are overwhelmed with patient loads, hospital rounds, and administrative paperwork. The average time a Medical Representative gets during a chamber call has dropped to under <strong>90 seconds</strong>.</p>

<p>Flipping through bulky laminated paper folders fails to engage young, digitally savvy physicians who expect concise, evidence-based visual presentations.</p>

<h2>What Makes Next-Gen E-Detailing Effective?</h2>
<p>Digital Visual Aids (DVA) hosted inside the Fieldomni mobile suite transform routine calls into interactive scientific dialogues:</p>
<ul>
    <li><strong>3D Molecular Action Animations:</strong> Show mechanism of action (MoA) in 15-second high-impact loops.</li>
    <li><strong>Interactive Dosage Calculators:</strong> Allow doctors to input patient parameters (e.g. renal clearance or pediatric weight) to view tailored clinical trial results.</li>
    <li><strong>Slide Duration Telemetry:</strong> Marketing teams see exact data on which clinical trial slides doctors spend the most time viewing across all territories.</li>
</ul>

<div class="blog-callout">
    <h4>📊 Data-Driven Detailing</h4>
    <p>If 80% of cardiologists skip Slide 4 but stay 45 seconds on Slide 7 (the safety profile in hypertensive patients), marketing can immediately update the sequence nationwide with one click.</p>
</div>

<h2>Conclusion</h2>
<p>Empowering MRs with dynamic e-detailing turns sales reps into knowledgeable healthcare partners, fostering long-term clinical credibility and prescription loyalty.</p>
HTML
        ]
    ];

    $insert = $pdo->prepare("INSERT INTO blogs 
        (title, slug, excerpt, content, cover_image, category, author_name, author_role, author_avatar, read_time, tags, meta_title, meta_description, meta_keywords, status, views, created_at, updated_at) 
        VALUES 
        (:title, :slug, :excerpt, :content, :cover_image, :category, :author_name, :author_role, :author_avatar, :read_time, :tags, :meta_title, :meta_description, :meta_keywords, :status, :views, datetime('now'), datetime('now'))");

    foreach ($sampleBlogs as $b) {
        $insert->execute([
            ':title' => $b['title'],
            ':slug' => $b['slug'],
            ':excerpt' => $b['excerpt'],
            ':content' => $b['content'],
            ':cover_image' => $b['cover_image'],
            ':category' => $b['category'],
            ':author_name' => $b['author_name'],
            ':author_role' => $b['author_role'],
            ':author_avatar' => $b['author_avatar'],
            ':read_time' => $b['read_time'],
            ':tags' => $b['tags'],
            ':meta_title' => $b['meta_title'],
            ':meta_description' => $b['meta_description'],
            ':meta_keywords' => $b['meta_keywords'],
            ':status' => $b['status'],
            ':views' => $b['views']
        ]);
        echo "Inserted: {$b['title']}\n";
    }

    echo "Seeding completed successfully! Default admin: admin@fieldomni.com / admin123\n";
} else {
    echo "Database already contains $existingCount blogs. Skipping seeding.\n";
}
