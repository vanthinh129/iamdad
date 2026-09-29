// ============================================
// I am Dad - Content Renderers
// ============================================

export function renderHome() {
  return `
    <div class="fade-in">
      <!-- Hero -->
      <div class="feature-card" style="margin-bottom: var(--space-8);">
        <div class="card-title">Chào Ba 👋</div>
        <div class="card-desc">
          Đây là cẩm nang dành riêng cho bạn — một người cha đang tìm cách tốt nhất để giúp con trai tập trung và phát triển. 
          Tất cả nội dung bên dưới được xây dựng dựa trên các phương pháp khoa học (TEACCH, ABA, OT) và đã được tùy chỉnh theo đặc điểm của bé: 
          yêu động vật, thích âm nhạc, có thể ngồi yên 1-2 tiếng nhưng cần sự hiện diện của ba mẹ.
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="stat-grid stagger">
        <div class="stat-card">
          <div class="stat-value orange">6</div>
          <div class="stat-label">Khu vực cần setup</div>
        </div>
        <div class="stat-card">
          <div class="stat-value teal">4</div>
          <div class="stat-label">Tuần luyện tập</div>
        </div>
        <div class="stat-card">
          <div class="stat-value green">12+</div>
          <div class="stat-label">Bài tập & trò chơi</div>
        </div>
        <div class="stat-card">
          <div class="stat-value purple">∞</div>
          <div class="stat-label">Tình yêu của Ba</div>
        </div>
      </div>

      <!-- Navigation Cards -->
      <div class="card-grid stagger">
        <div class="card nav-card" data-goto="today" style="border: 2px solid var(--accent-orange); background: linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(234, 88, 12, 0.03));">
          <div class="card-icon orange">🌟</div>
          <div class="card-title" style="color: var(--accent-orange); display: flex; align-items: center; justify-content: space-between;">
            Hôm nay học gì
            <span style="font-size: 11px; background: var(--accent-orange); color: white; padding: 2px 8px; border-radius: 12px; font-weight: 700;">IN BÀI TẬP</span>
          </div>
          <div class="card-desc">Bảng kế hoạch học tập hôm nay + Bộ bài tập 3 rổ TEACCH chuẩn in A4 cho máy in màu Brother HL-L3280CDW.</div>
        </div>
        <div class="card nav-card" data-goto="today-ai" style="border: 2px solid #10b981; background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.03));">
          <div class="card-icon green">🤖</div>
          <div class="card-title" style="color: #059669; display: flex; align-items: center; justify-content: space-between;">
            Hôm nay học gì AI
            <span style="font-size: 11px; background: #10b981; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 700;">TẠO BÀI TẬP AI ⚡</span>
          </div>
          <div class="card-desc">Tự động sinh 100% đề bài mới (Cả 3 rổ R1, R2, R3) trực tiếp bằng AI theo câu lệnh/chủ đề yêu thích của Ba.</div>
        </div>
        <div class="card nav-card" data-goto="room-setup">
          <div class="card-icon orange">🛋️</div>
          <div class="card-title">Setup phòng học</div>
          <div class="card-desc">Hướng dẫn chi tiết cách bố trí phòng trống thành không gian học tập tối ưu cho bé tự kỷ, với các khu vực chức năng rõ ràng.</div>
        </div>
        <div class="card nav-card" data-goto="focus-program">
          <div class="card-icon teal">🎯</div>
          <div class="card-title">Chương trình tập trung</div>
          <div class="card-desc">Chương trình 4 tuần từng bước, từ 5 phút đến 20+ phút tập trung độc lập, sử dụng phương pháp TEACCH & ABA.</div>
        </div>
        <div class="card nav-card" data-goto="exercises">
          <div class="card-icon green">📝</div>
          <div class="card-title">Bài tập & Trò chơi</div>
          <div class="card-desc">Các hoạt động tập trung theo chủ đề động vật mà bé yêu thích, kết hợp vận động và nhận thức.</div>
        </div>
        <div class="card nav-card" data-goto="behavior">
          <div class="card-icon purple">💡</div>
          <div class="card-title">Hiểu hành vi của bé</div>
          <div class="card-desc">Giải thích khoa học về hành vi nói linh tinh, tay qươ qươ, phụ thuộc ba mẹ — và cách ứng xử phù hợp.</div>
        </div>
        <div class="card nav-card" data-goto="daily-routine">
          <div class="card-icon orange">📅</div>
          <div class="card-title">Lịch trình mỗi ngày</div>
          <div class="card-desc">Mẫu lịch trình học tập tại phòng, bao gồm giờ học, giờ chơi, giờ nghỉ giải lao cảm giác.</div>
        </div>
        <div class="card nav-card" data-goto="tracker">
          <div class="card-icon teal">📊</div>
          <div class="card-title">Theo dõi tiến trình</div>
          <div class="card-desc">Ghi nhận hành vi, mức độ tập trung và tiến bộ của bé qua từng ngày.</div>
        </div>
      </div>

      <!-- Motivation -->
      <div class="content-block" style="margin-top: var(--space-8); text-align: center;">
        <div style="font-size: 48px; margin-bottom: var(--space-4);">🌟</div>
        <h2 style="justify-content: center;">Lời nhắn cho Ba</h2>
        <p style="max-width: 600px; margin: 0 auto;">
          Con đã có những bước tiến tuyệt vời — từ việc chạy nhảy không ngồi yên, giờ bé đã ngồi được 1-2 tiếng. 
          Mỗi ngày kiên trì là một ngày con tiến lên phía trước. Ba đang làm rất tốt rồi. Hãy tiếp tục nhé!
        </p>
      </div>
    </div>
  `;
}

export function renderRoomSetup() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge orange">🛋️ Hướng dẫn thực hành</div>
        <h1 class="section-title">Setup phòng học cho bé</h1>
        <p class="section-subtitle">
          Biến phòng trống thành không gian học tập có cấu trúc theo phương pháp TEACCH — 
          giúp bé biết "ở đây làm gì, làm bao nhiêu, khi nào xong, xong rồi làm gì".
        </p>
      </div>

      <!-- Principles -->
      <div class="content-block">
        <h2>🧠 Nguyên tắc cốt lõi: Tại sao phải setup phòng?</h2>
        <p>Bé tự kỷ xử lý thông tin khác với trẻ bình thường. Não bé khó lọc bỏ các kích thích không liên quan (tiếng ồn, hình ảnh, đồ vật xung quanh). Một căn phòng <strong>có cấu trúc rõ ràng</strong> giúp bé:</p>
        <ul>
          <li><strong>Giảm tải nhận thức</strong> — bé không phải tự quyết định "mình nên làm gì bây giờ"</li>
          <li><strong>Tự điều hướng</strong> — nhìn vào không gian là biết phải làm gì</li>
          <li><strong>Giảm lo âu</strong> — sự dự đoán được tạo cảm giác an toàn</li>
          <li><strong>Tăng tính độc lập</strong> — dần dần bé tự làm mà không cần ba mẹ nhắc liên tục</li>
        </ul>

        <div class="highlight-box important">
          <div class="highlight-box-title">⚡ ĐẶC BIỆT CHO BÉ NHÀ MÌNH</div>
          <p>Bé phụ thuộc sự hiện diện của ba mẹ → cần setup để dần dần ba mẹ có thể "fade out" — 
          ban đầu ngồi cạnh, rồi ngồi xa hơn, rồi ra khỏi phòng trong vài phút.</p>
        </div>
      </div>

      <!-- Room Zones -->
      <div class="content-block">
        <h2>🗺️ Sơ đồ 6 khu vực trong phòng</h2>
        <p>Chia phòng thành 6 khu vực rõ ràng. Dùng thảm màu, kệ sách, hoặc băng keo dán sàn để phân chia. Mỗi khu vực có chức năng cụ thể.</p>
        
        <div class="zone-grid stagger">
          <div class="zone-card">
            <span class="zone-emoji">📚</span>
            <h4>Khu vực HỌC (Work Station)</h4>
            <p>Nơi bé ngồi làm bài tập theo hệ thống "từ trái sang phải"</p>
            <ul>
              <li>1 bàn + 1 ghế vừa tầm bé</li>
              <li>Mặt bàn hướng vào tường (giảm sao nhãng)</li>
              <li>Kệ trái: bài chưa làm</li>
              <li>Kệ phải: bài đã xong (hộp "XONG")</li>
              <li>Đồng hồ bấm giờ visual timer</li>
            </ul>
          </div>
          
          <div class="zone-card">
            <span class="zone-emoji">🧘</span>
            <h4>Góc BÌNH TĨNH (Calm Corner)</h4>
            <p>Nơi bé đến khi quá tải cảm giác hoặc cần reset</p>
            <ul>
              <li>Đệm bean bag hoặc gối ôm</li>
              <li>Chăn nặng (weighted blanket)</li>
              <li>Tai nghe chống ồn</li>
              <li>Đèn LED nhẹ (ánh sáng ấm)</li>
              <li>1-2 đồ chơi fidget</li>
            </ul>
          </div>
          
          <div class="zone-card">
            <span class="zone-emoji">🎨</span>
            <h4>Khu vực SÁNG TẠO</h4>
            <p>Nơi bé vẽ, nặn đất sét, xếp hình — kích thích xúc giác</p>
            <ul>
              <li>Bàn thấp + ghế ngồi sàn</li>
              <li>Hộp đất nặn, sáp màu</li>
              <li>Giấy vẽ, sticker động vật</li>
              <li>Bảng trắng nhỏ + bút</li>
            </ul>
          </div>
          
          <div class="zone-card">
            <span class="zone-emoji">🏃</span>
            <h4>Khu vực VẬN ĐỘNG</h4>
            <p>Nơi bé xả năng lượng — rất quan trọng cho sensory break</p>
            <ul>
              <li>Thảm yoga hoặc thảm mềm</li>
              <li>Mini trampoline (nếu có)</li>
              <li>Bóng tập (exercise ball)</li>
              <li>Dây thun kháng lực</li>
              <li>Gối đập (crash pad)</li>
            </ul>
          </div>
          
          <div class="zone-card">
            <span class="zone-emoji">📋</span>
            <h4>Bảng LỊCH TRÌNH (Visual Schedule)</h4>
            <p>Treo ở nơi bé dễ thấy nhất khi bước vào phòng</p>
            <ul>
              <li>Bảng nam châm hoặc bảng velcro</li>
              <li>Thẻ hình ảnh các hoạt động</li>
              <li>Mũi tên "đang ở đây"</li>
              <li>Hộp "XONG" cho thẻ đã hoàn thành</li>
            </ul>
          </div>
          
          <div class="zone-card">
            <span class="zone-emoji">🪑</span>
            <h4>Ghế BA MẸ</h4>
            <p>Vị trí ngồi của ba mẹ — chiến lược "fade out" dần</p>
            <ul>
              <li>Tuần 1-2: Ngồi cạnh bé</li>
              <li>Tuần 3-4: Ngồi cách bé 1-2m</li>
              <li>Tuần 5-6: Ngồi ở góc phòng</li>
              <li>Tuần 7+: Ra ngoài cửa, vào lại</li>
              <li>Mục tiêu: Bé tự làm 10-15 phút</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Checklist -->
      <div class="content-block">
        <h2>✅ Checklist mua sắm & chuẩn bị</h2>
        <div class="highlight-box tip">
          <div class="highlight-box-title">💡 MẸO TIẾT KIỆM</div>
          <p>Không cần mua đồ đắt tiền! Nhiều thứ có thể tự làm: thẻ visual schedule in từ Internet, hộp "XONG" từ hộp giày, chăn nặng tự may bằng hạt đậu.</p>
        </div>
        <ul class="checklist">
          <li>Bàn học + ghế vừa tầm bé (bé ngồi chân chạm đất)</li>
          <li>Kệ hoặc rổ nhựa 3-4 ngăn (đựng bài tập)</li>
          <li>Hộp "XONG" (finished box) — dán nhãn rõ ràng</li>
          <li>Visual timer (đồng hồ cát hoặc app timer trên tablet cũ)</li>
          <li>Bảng lịch trình visual (velcro board hoặc bảng nam châm)</li>
          <li>Thẻ hình ảnh hoạt động (in, cắt, ép plastic)</li>
          <li>Đệm hoặc bean bag cho góc bình tĩnh</li>
          <li>Tai nghe chống ồn (cho lúc quá tải)</li>
          <li>Fidget toys: bóp stress ball, spinner, đất nặn</li>
          <li>Thảm yoga hoặc thảm mềm cho khu vận động</li>
          <li>Đèn LED dải (ánh sáng ấm, dịu) cho góc bình tĩnh</li>
          <li>Rèm cửa hoặc tấm che để giảm ánh sáng khi cần</li>
          <li>Thẻ "Trước/Sau" (First/Then board)</li>
          <li>Sticker khen thưởng hình động vật 🦁🐘🦒</li>
        </ul>
      </div>

      <!-- Setup Rules -->
      <div class="content-block">
        <h2>⚙️ Quy tắc setup quan trọng</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Giảm thiểu kích thích thị giác</h4>
              <p>Tường nên sơn màu trung tính (trắng ngà, xám nhạt, be). KHÔNG treo quá nhiều tranh ảnh. Chỉ treo bảng lịch trình và quy tắc phòng.</p>
              <p>Đồ chơi/dụng cụ PHẢI được cất trong hộp kín — bé chỉ thấy thứ đang cần dùng.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Giảm thiểu kích thích thính giác</h4>
              <p>Đóng cửa phòng khi bé học. Nếu nhà ồn, dùng máy phát tiếng ồn trắng (white noise) hoặc nhạc nhẹ không lời.</p>
              <p>Ngoại lệ: Dùng âm nhạc nhẹ (nhạc cổ điển, thiên nhiên) như "phần thưởng" sau khi hoàn thành bài tập.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Ánh sáng phù hợp</h4>
              <p>Ưu tiên ánh sáng tự nhiên nhưng dùng rèm để điều chỉnh. Tránh đèn neon nhấp nháy. Nên dùng đèn LED ánh sáng ấm, có dimmer.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Ranh giới rõ ràng</h4>
              <p>Dùng <strong>thảm màu khác nhau</strong> hoặc <strong>băng keo dán sàn</strong> để chia khu vực. Bé cần NHÌN được ranh giới, không chỉ nghe bạn nói.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Cho bé tham gia setup</h4>
              <p>Để bé giúp dán thẻ, chọn sticker, đặt đồ vào hộp. Khi bé tham gia tạo dựng không gian, bé sẽ cảm thấy "đây là của mình" và muốn sử dụng nó hơn.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Room Layout Diagram -->
      <div class="content-block">
        <h2>📐 Gợi ý bố trí (nhìn từ trên xuống)</h2>
        <div style="background: var(--bg-secondary); border-radius: var(--radius-lg); padding: var(--space-6); font-family: monospace; font-size: var(--text-sm); line-height: 2; overflow-x: auto;">
<pre style="color: var(--text-secondary);">
┌─────────────────────────────────────────────────┐
│                    CỬA VÀO                       │
│  ┌──────────┐                    ┌──────────┐   │
│  │  📋      │                    │  🧘      │   │
│  │  BẢNG    │                    │  GÓC     │   │
│  │  LỊCH    │                    │  BÌNH    │   │
│  │  TRÌNH   │                    │  TĨNH   │   │
│  └──────────┘                    │  (bean   │   │
│                                  │   bag)   │   │
│  ┌──────────────────┐           └──────────┘   │
│  │  🪑 GHẾ BA MẸ   │                           │
│  │  (di chuyển dần) │                           │
│  └──────────────────┘                           │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐     │
│  │  📚 WORK        │  │  🎨 SÁNG TẠO    │     │
│  │  STATION         │  │                  │     │
│  │  [Kệ trái]      │  │  (bàn thấp)     │     │
│  │  [Bàn ← tường] │  │                  │     │
│  │  [Kệ phải=XONG]│  └──────────────────┘     │
│  └──────────────────┘                           │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │  🏃 KHU VẬN ĐỘNG (thảm mềm/trampoline) │   │
│  └──────────────────────────────────────────┘   │
│                    CỬA SỔ                        │
└─────────────────────────────────────────────────┘
</pre>
        </div>
      </div>
    </div>
  `;
}

export function renderFocusProgram() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge teal">🎯 Chương trình 4 tuần</div>
        <h1 class="section-title">Luyện tập trung từng bước</h1>
        <p class="section-subtitle">
          Chương trình tăng dần thời gian tập trung độc lập của bé, từ 5 phút (có ba mẹ cạnh) 
          đến 20+ phút (tự làm). Dựa trên phương pháp TEACCH Structured Work System.
        </p>
      </div>

      <!-- Core Principle -->
      <div class="content-block">
        <h2>🧩 Nguyên tắc "4 câu hỏi" của TEACCH</h2>
        <p>Mỗi khi bé ngồi vào bàn học, hệ thống phải trả lời được 4 câu hỏi SAU mà KHÔNG cần lời nói:</p>
        <div class="zone-grid">
          <div class="zone-card">
            <span class="zone-emoji">❓</span>
            <h4>Làm gì?</h4>
            <p>Bé NHÌN thấy bài tập ở kệ bên trái. Mỗi bài được đựng trong một rổ/folder riêng.</p>
          </div>
          <div class="zone-card">
            <span class="zone-emoji">📏</span>
            <h4>Bao nhiêu?</h4>
            <p>Bé đếm được số rổ/folder = số bài phải làm. Bắt đầu từ 2-3 bài, tăng dần.</p>
          </div>
          <div class="zone-card">
            <span class="zone-emoji">🏁</span>
            <h4>Khi nào xong?</h4>
            <p>Khi kệ trái HẾT rổ = XONG. Tất cả bài đã chuyển sang hộp "XONG" bên phải.</p>
          </div>
          <div class="zone-card">
            <span class="zone-emoji">🎁</span>
            <h4>Xong rồi được gì?</h4>
            <p>Thẻ "Trước/Sau" cho bé biết: sau khi XONG → được chơi/xem/nghe nhạc về động vật!</p>
          </div>
        </div>
      </div>

      <!-- Week by Week Program -->
      <div class="content-block">
        <h2>📅 Chương trình chi tiết theo tuần</h2>
        
        <h3>🔵 Tuần 1: Làm quen hệ thống (5-7 phút/phiên)</h3>
        <table class="week-table">
          <thead>
            <tr><th>Ngày</th><th>Hoạt động</th><th>Ba mẹ ở đâu</th><th>Mục tiêu</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Ngày 1-2</td>
              <td>1 bài tập đã thạo (tô màu con vật) — 5 phút</td>
              <td>Ngồi cạnh, hỗ trợ tay-trên-tay</td>
              <td>Bé hiểu quy trình: lấy rổ → làm → bỏ hộp XONG</td>
            </tr>
            <tr>
              <td>Ngày 3-4</td>
              <td>2 bài tập đã thạo — 5-7 phút</td>
              <td>Ngồi cạnh, CHỈ nhắc bằng cử chỉ (không nói)</td>
              <td>Bé tự lấy rổ, tự chuyển sang hộp XONG</td>
            </tr>
            <tr>
              <td>Ngày 5-7</td>
              <td>2-3 bài đã thạo — 7 phút</td>
              <td>Ngồi cạnh, quan sát, can thiệp tối thiểu</td>
              <td>Bé hoàn thành chuỗi bài KHÔNG cần nhắc</td>
            </tr>
          </tbody>
        </table>

        <div class="highlight-box tip">
          <div class="highlight-box-title">💡 LƯU Ý TUẦN 1</div>
          <p>Chỉ dùng bài BÉ ĐÃ BIẾT LÀM. Mục tiêu tuần này là dạy HỆ THỐNG, không phải dạy kiến thức mới. 
          Ví dụ: tô màu, xếp puzzle 4-6 mảnh, ghép thẻ con vật.</p>
        </div>

        <h3>🟢 Tuần 2: Tăng bài + Bắt đầu fade (7-10 phút/phiên)</h3>
        <table class="week-table">
          <thead>
            <tr><th>Ngày</th><th>Hoạt động</th><th>Ba mẹ ở đâu</th><th>Mục tiêu</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Ngày 8-9</td>
              <td>3 bài — 7-8 phút</td>
              <td>Ngồi cạnh nhưng KHÔNG nhìn bé liên tục (đọc sách)</td>
              <td>Bé chấp nhận ba mẹ không "tập trung vào bé" 100%</td>
            </tr>
            <tr>
              <td>Ngày 10-11</td>
              <td>3 bài — 8-10 phút</td>
              <td>Di chuyển ghế cách bé 1 mét</td>
              <td>Bé vẫn làm khi ba mẹ không ngồi sát</td>
            </tr>
            <tr>
              <td>Ngày 12-14</td>
              <td>3-4 bài — 10 phút</td>
              <td>Ngồi cách bé 2 mét, nhìn điện thoại</td>
              <td>Bé hoàn thành mà chỉ cần biết "ba mẹ vẫn ở đây"</td>
            </tr>
          </tbody>
        </table>

        <h3>🟡 Tuần 3: Fade mạnh hơn (10-15 phút/phiên)</h3>
        <table class="week-table">
          <thead>
            <tr><th>Ngày</th><th>Hoạt động</th><th>Ba mẹ ở đâu</th><th>Mục tiêu</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Ngày 15-17</td>
              <td>4 bài — 10-12 phút</td>
              <td>Ngồi ở góc phòng (3-4m)</td>
              <td>Bé tự hoàn thành chuỗi bài ở khoảng cách xa</td>
            </tr>
            <tr>
              <td>Ngày 18-21</td>
              <td>4-5 bài — 12-15 phút</td>
              <td>Đứng ở cửa phòng, thỉnh thoảng bước ra 1-2 phút rồi quay lại</td>
              <td>Bé tiếp tục làm khi ba mẹ vắng mặt ngắn</td>
            </tr>
          </tbody>
        </table>

        <h3>🔴 Tuần 4: Độc lập (15-20+ phút/phiên)</h3>
        <table class="week-table">
          <thead>
            <tr><th>Ngày</th><th>Hoạt động</th><th>Ba mẹ ở đâu</th><th>Mục tiêu</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Ngày 22-25</td>
              <td>5 bài — 15-18 phút</td>
              <td>Ra khỏi phòng 3-5 phút, quay lại kiểm tra</td>
              <td>Bé hoàn thành 2-3 bài khi ba mẹ vắng</td>
            </tr>
            <tr>
              <td>Ngày 26-28</td>
              <td>5-6 bài — 18-20 phút</td>
              <td>Ra khỏi phòng 5-10 phút</td>
              <td>Bé hoàn thành toàn bộ chuỗi bài ĐỘC LẬP 🎉</td>
            </tr>
          </tbody>
        </table>

        <div class="highlight-box warning">
          <div class="highlight-box-title">⚠️ QUAN TRỌNG</div>
          <p>Đây là lộ trình LÝ TƯỞNG. Mỗi bé khác nhau — nếu bé chưa sẵn sàng, HÃY Ở LẠI BƯỚC HIỆN TẠI thêm 1-2 tuần. 
          Không bao giờ bắt ép hoặc phạt bé vì chưa đạt được. Tiến bộ nhỏ vẫn là tiến bộ!</p>
        </div>
      </div>

      <!-- Reward System -->
      <div class="content-block">
        <h2>🎁 Hệ thống khen thưởng "Thú cưng"</h2>
        <p>Vì bé cực kỳ thích động vật, hãy xây dựng hệ thống khen thưởng xoay quanh chủ đề này:</p>
        <div class="steps">
          <div class="step">
            <div class="step-number">🦁</div>
            <div class="step-content">
              <h4>Token Board "Sở thú của con"</h4>
              <p>Làm 1 bảng có hình sở thú. Mỗi lần bé hoàn thành 1 bài tập, bé được dán 1 sticker con vật lên bảng. Khi dán đủ 5 con = được 1 phần thưởng lớn.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">🐘</div>
            <div class="step-content">
              <h4>Phần thưởng nên là gì?</h4>
              <p><strong>Tốt nhất:</strong> Xem video ngắn (2-3 phút) về động vật, nghe nhạc về thú, chơi với mô hình động vật.<br/>
              <strong>Tránh:</strong> Cho xem hoạt hình dài — vì khó dừng lại và có thể kích thích quá mức.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">🐬</div>
            <div class="step-content">
              <h4>Thẻ "Trước / Sau" (First / Then)</h4>
              <p>Trước mỗi phiên học, cho bé NHÌN thẻ: "TRƯỚC: Làm bài ✏️ → SAU: Xem video con sư tử 🦁". 
              Bé biết chính xác mình sẽ được gì, tạo động lực tập trung.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderExercises() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge green">📝 Bài tập thực hành</div>
        <h1 class="section-title">Bài tập & Trò chơi tập trung</h1>
        <p class="section-subtitle">
          Tất cả hoạt động đều xoay quanh chủ đề ĐỘNG VẬT — sở thích lớn nhất của bé. 
          Sắp xếp theo độ khó tăng dần.
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs" id="exercise-tabs">
        <div class="tab active" data-tab="desk">📚 Bài tập bàn học</div>
        <div class="tab" data-tab="movement">🏃 Vận động</div>
        <div class="tab" data-tab="reading">📖 Đọc hiểu</div>
        <div class="tab" data-tab="sensory">🎨 Cảm giác</div>
      </div>

      <!-- Desk Exercises -->
      <div class="tab-content active" id="tab-desk">
        <div class="card-grid stagger">
          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🦁</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>Ghép thẻ con vật</h4>
            <p class="card-desc">In thẻ hình 10 con vật (2 bộ giống nhau). Bé tìm và ghép đôi. Bắt đầu từ 4 cặp, tăng lên 10.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 3-5 phút</span>
              <span class="activity-meta-item">🎯 Chú ý thị giác</span>
            </div>
          </div>
          
          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🐘</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>Phân loại động vật</h4>
            <p class="card-desc">Cho bé 15-20 thẻ con vật. Bé phân loại vào 3 hộp: "Sống trên cạn" / "Sống dưới nước" / "Biết bay". Dán hình minh họa lên hộp.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-7 phút</span>
              <span class="activity-meta-item">🎯 Phân loại + nhận thức</span>
            </div>
          </div>
          
          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🐢</span>
              <span class="activity-tag medium">Trung bình</span>
            </div>
            <h4>Nối con vật với số chân</h4>
            <p class="card-desc">Bảng nối: Hình con vật bên trái, số chân bên phải (2, 4, 6, 8, 0). Kết hợp luyện tập trung + toán.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5 phút</span>
              <span class="activity-meta-item">🎯 Tập trung + Tư duy</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🦒</span>
              <span class="activity-tag medium">Trung bình</span>
            </div>
            <h4>Đếm & viết số con vật</h4>
            <p class="card-desc">Trang giấy có nhiều hình con vật lặp lại. Bé đếm từng loại rồi viết số. VD: 🐱 = 4, 🐶 = 3, 🐦 = 5.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-8 phút</span>
              <span class="activity-meta-item">🎯 Đếm + Viết + Tập trung</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🐍</span>
              <span class="activity-tag hard">Nâng cao</span>
            </div>
            <h4>Chuỗi pattern con vật</h4>
            <p class="card-desc">Cho bé 1 chuỗi: 🐱🐶🐱🐶🐱___. Bé phải điền con vật tiếp theo. Tăng dần độ phức tạp: 🐱🐱🐶🐱🐱🐶___.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-7 phút</span>
              <span class="activity-meta-item">🎯 Tư duy logic + Pattern</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🦅</span>
              <span class="activity-tag hard">Nâng cao</span>
            </div>
            <h4>Bài toán con vật</h4>
            <p class="card-desc">Thay số bằng hình: "3 con mèo 🐱 + 2 con chó 🐶 = ___ con". Kết hợp sở thích với toán cộng/trừ bé đã biết.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-10 phút</span>
              <span class="activity-meta-item">🎯 Toán + Đọc hiểu</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Movement Exercises -->
      <div class="tab-content" id="tab-movement">
        <div class="card-grid stagger">
          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🐻</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>Đi bộ như con vật</h4>
            <p class="card-desc">Ba mẹ giơ thẻ hình con vật, bé bắt chước: đi như gấu (bò), nhảy như thỏ, đi rón rén như mèo. Rèn luyện nghe hiểu + kiểm soát cơ thể.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-10 phút</span>
              <span class="activity-meta-item">🎯 Nghe hiểu + Vận động thô</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🐸</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>"Đèn đỏ, đèn xanh" phiên bản thú</h4>
            <p class="card-desc">Giơ thẻ sư tử 🦁 = ĐỨNG yên (vì sư tử đang rình mồi). Giơ thẻ thỏ 🐰 = NHẢY đi. Luyện khả năng dừng lại (inhibition control).</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-7 phút</span>
              <span class="activity-meta-item">🎯 Kiểm soát xung động</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🐒</span>
              <span class="activity-tag medium">Trung bình</span>
            </div>
            <h4>Obstacle course "Rừng rậm"</h4>
            <p class="card-desc">Dùng gối, ghế, thảm tạo đường đi. Bé phải: bò qua "hang" (dưới bàn), nhảy qua "sông" (thảm xanh), chạm "cây" (ghế) rồi về đích. Rèn trình tự + tập trung.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 10-15 phút</span>
              <span class="activity-meta-item">🎯 Trình tự + Proprioception</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Reading Comprehension -->
      <div class="tab-content" id="tab-reading">
        <div class="content-block">
          <h2>📖 Chiến lược đọc hiểu cho bé</h2>
          <p>Bé đọc được nhưng chưa hiểu nhiều — đây là đặc điểm <strong>Hyperlexia</strong> (đọc giỏi hơn hiểu). Cách tiếp cận:</p>
          
          <div class="highlight-box info">
            <div class="highlight-box-title">🔑 NGUYÊN TẮC VÀNG</div>
            <p>Không hỏi "Con hiểu không?" — mà hỏi CỤ THỂ: "Con mèo ở đâu? Chỉ cho ba." Dùng hình ảnh để kiểm tra hiểu biết.</p>
          </div>
        </div>

        <div class="card-grid stagger">
          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">📕</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>Đọc + Chỉ hình</h4>
            <p class="card-desc">Dùng sách có hình lớn về động vật. Đọc 1 câu ngắn: "Con voi có vòi dài." → Bé chỉ vào vòi. Bé hiểu = bé chỉ đúng.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-10 phút</span>
              <span class="activity-meta-item">🎯 Kết nối chữ - hình</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">📗</span>
              <span class="activity-tag medium">Trung bình</span>
            </div>
            <h4>Đọc + Sắp xếp trình tự</h4>
            <p class="card-desc">Đọc 1 câu chuyện ngắn 3 câu về con vật. Sau đó cho bé 3 hình, bé xếp đúng thứ tự: "Con gà trống gáy → Mặt trời mọc → Gà mẹ dẫn gà con đi ăn."</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-8 phút</span>
              <span class="activity-meta-item">🎯 Trình tự + Hiểu nội dung</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">📘</span>
              <span class="activity-tag hard">Nâng cao</span>
            </div>
            <h4>Đọc + Trả lời WH</h4>
            <p class="card-desc">Đọc đoạn ngắn: "Con mèo tên Miu. Miu thích ăn cá. Miu sống ở nhà bà." Hỏi: "Miu thích ăn gì?" (chỉ vào thẻ hình: cá/gà/cơm). Dần dần bỏ thẻ hình.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-10 phút</span>
              <span class="activity-meta-item">🎯 Đọc hiểu + Ngôn ngữ</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sensory Activities -->
      <div class="tab-content" id="tab-sensory">
        <div class="card-grid stagger">
          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🎨</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>Nặn động vật bằng đất sét</h4>
            <p class="card-desc">Cho bé xem hình 1 con vật đơn giản (rắn, ốc sên). Bé nặn theo. Hoạt động xúc giác giúp tay bé "bận" — giảm qươ qươ tay.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 10-15 phút</span>
              <span class="activity-meta-item">🎯 Xúc giác + Tập trung tinh</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🎵</span>
              <span class="activity-tag easy">Dễ</span>
            </div>
            <h4>Nghe tiếng kêu - Đoán con vật</h4>
            <p class="card-desc">Mở âm thanh tiếng kêu động vật. Bé nghe → chỉ/nói tên con vật. Tận dụng sở thích âm nhạc + thú vật của bé.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 5-8 phút</span>
              <span class="activity-meta-item">🎯 Thính giác + Chú ý</span>
            </div>
          </div>

          <div class="activity-card">
            <div class="activity-header">
              <span class="activity-emoji">🖌️</span>
              <span class="activity-tag medium">Trung bình</span>
            </div>
            <h4>Vẽ theo bước (Draw step-by-step)</h4>
            <p class="card-desc">In tờ "Vẽ con mèo 4 bước": 1) Vẽ tròn, 2) Thêm tai, 3) Thêm mắt mũi, 4) Thêm râu. Bé làm theo từng bước → rèn trình tự + kiên nhẫn.</p>
            <div class="activity-meta">
              <span class="activity-meta-item">⏱️ 8-12 phút</span>
              <span class="activity-meta-item">🎯 Trình tự + Vận động tinh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderBehavior() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge purple">💡 Kiến thức cho Ba Mẹ</div>
        <h1 class="section-title">Hiểu hành vi của bé</h1>
        <p class="section-subtitle">
          Mỗi hành vi của bé đều có LÝ DO. Hiểu được "tại sao" sẽ giúp ba mẹ 
          ứng xử đúng cách — không phạt, không ép, mà dẫn dắt.
        </p>
      </div>

      <!-- Behavior 1: Nói linh tinh -->
      <div class="content-block">
        <h2>🗣️ Hành vi: Nói linh tinh, nói không có nghĩa</h2>
        
        <h3>Đây là gì?</h3>
        <p>Trong chuyên ngành gọi là <strong>Echolalia</strong> (nhại lời) hoặc <strong>Scripting</strong> (lặp lại lời thoại đã nghe). 
        Bé nhà mình xem nhiều hoạt hình → rất có thể bé đang lặp lại lời thoại phim, hoặc tự tạo "kịch bản" trong đầu.</p>
        
        <div class="highlight-box info">
          <div class="highlight-box-title">🧠 KHOA HỌC NÓI GÌ?</div>
          <p>Echolalia KHÔNG phải là "hư" hay "không nghe lời". Đây là cách não bé xử lý ngôn ngữ — bé đang dùng "kho lời nói" đã thu thập được 
          để giao tiếp hoặc tự điều hòa cảm xúc. Khoảng 75% trẻ tự kỷ trải qua giai đoạn này.</p>
        </div>

        <h3>Ba mẹ nên làm gì?</h3>
        <ul>
          <li><strong>KHÔNG nên:</strong> Quát "Đừng nói linh tinh!", "Im đi!" — bé sẽ lo âu hơn, hành vi tăng.</li>
          <li><strong>NÊN làm - Bước 1:</strong> Lắng nghe xem bé nói CÁI GÌ. Có khi đó là câu thoại liên quan đến cảm xúc bé đang trải (VD: nhân vật buồn = bé đang buồn).</li>
          <li><strong>NÊN làm - Bước 2:</strong> Nếu bé nói khi đang làm bài → nhẹ nhàng chỉ vào bài: "Con nhìn đây nè" (redirect chú ý về bài).</li>
          <li><strong>NÊN làm - Bước 3:</strong> Dạy câu thay thế. VD: Bé hay nói "Simba chạy!" → dạy bé nói "Con muốn chơi" (dần thay thế scripting bằng ngôn ngữ chức năng).</li>
          <li><strong>NÊN làm - Bước 4:</strong> Cho phép bé nói scripting ở góc bình tĩnh (đó là nơi bé được "tự do"). Nhưng ở bàn học = cần im lặng hoặc nói đúng bài.</li>
        </ul>

        <div class="highlight-box tip">
          <div class="highlight-box-title">💡 MẸO HAY</div>
          <p>Dùng "Giọng nhỏ / Giọng to" visual: Dán thẻ miệng mở (giọng to) và miệng đóng (im lặng) ở bàn học. 
          Khi bé cần im, chỉ vào thẻ "miệng đóng" thay vì nói.</p>
        </div>
      </div>

      <!-- Behavior 2: Tay qươ qươ -->
      <div class="content-block">
        <h2>🤚 Hành vi: Tay qươ qươ (Hand Flapping)</h2>
        
        <h3>Đây là gì?</h3>
        <p>Đây là <strong>Self-Stimulatory Behavior</strong> (Stimming) — hành vi tự kích thích giác quan. 
        Bé dùng hành vi này để:</p>
        <ul>
          <li>🎉 <strong>Biểu đạt hưng phấn</strong> — khi vui, bé không biết cách nào khác để thể hiện</li>
          <li>😰 <strong>Tự trấn tĩnh</strong> — khi lo âu hoặc quá tải cảm giác</li>
          <li>🧠 <strong>Tự điều hòa</strong> — giúp não xử lý thông tin tốt hơn</li>
        </ul>

        <div class="highlight-box important">
          <div class="highlight-box-title">⚡ QUAN ĐIỂM HIỆN ĐẠI</div>
          <p>ABA hiện đại KHÔNG CỐ XÓA BỎ stimming. Stimming là cách bé tự điều hòa — nếu ép bé dừng mà không cung cấp giải pháp thay thế, 
          bé sẽ tìm cách khác (có thể nguy hiểm hơn). Chỉ can thiệp nếu hành vi GÂY HẠI hoặc CẢN TRỞ NGHIÊM TRỌNG việc học.</p>
        </div>

        <h3>Chiến lược thay thế (nếu cần giảm lúc học)</h3>
        <ul>
          <li><strong>Cho tay bé "bận":</strong> Cầm bút, cầm bóp stress ball, nặn đất sét — tay có việc thì giảm qươ qươ</li>
          <li><strong>Sensory break:</strong> Trước khi học, cho bé 5 phút chơi ở khu vận động (nhảy trampoline, đấm gối) → xả năng lượng → ngồi yên tốt hơn</li>
          <li><strong>Fidget tool:</strong> Để 1 fidget spinner hoặc dây thun ở chân ghế cho bé đạp — thay thế stimming tay bằng stimming chân (ít ảnh hưởng học hơn)</li>
          <li><strong>Dạy cách thay thế:</strong> Khi bé hưng phấn, dạy bé vỗ tay 3 cái thay vì qươ tay. "Con vui hả? Vỗ tay nè!" 👏👏👏</li>
        </ul>
      </div>

      <!-- Behavior 3: Phụ thuộc ba mẹ -->
      <div class="content-block">
        <h2>👨‍👦 Hành vi: Không làm khi ba mẹ vắng mặt</h2>
        
        <h3>Tại sao bé như vậy?</h3>
        <p>Đây là hiện tượng <strong>Prompt Dependency</strong> (phụ thuộc gợi ý). Bé đã quen với mô hình:</p>
        <p style="text-align: center; font-size: var(--text-xl); padding: var(--space-4) 0;">
          Ba mẹ nhắc → Bé làm → Được khen
        </p>
        <p>Trong mô hình này, "Ba mẹ nhắc" trở thành tín hiệu bắt buộc. Không có tín hiệu = không hành động. 
        Đây KHÔNG phải bé lười — mà bé chưa được dạy cách TỰ BẮT ĐẦU.</p>

        <h3>Chiến lược "Prompt Fading" (giảm gợi ý dần)</h3>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Mức 1: Gợi ý cơ thể (Physical prompt)</h4>
              <p>Ba mẹ cầm tay bé đặt vào bài tập. Đây là mức hỗ trợ cao nhất — dùng khi bé chưa biết bắt đầu.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Mức 2: Gợi ý chỉ tay (Gestural prompt)</h4>
              <p>Ba mẹ CHỈ vào rổ bài tập, không nói gì. Bé hiểu "à, mình phải lấy cái đó".</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Mức 3: Gợi ý bằng hệ thống (Environmental prompt)</h4>
              <p>Hệ thống work station TỰ "nói cho bé biết": rổ ở kệ trái = việc cần làm. Không cần ba mẹ nói hay chỉ.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Mức 4: Độc lập 🌟</h4>
              <p>Bé tự đến bàn, tự lấy rổ, tự làm, tự bỏ vào hộp XONG. Ba mẹ chỉ kiểm tra sau khi bé hoàn thành.</p>
            </div>
          </div>
        </div>

        <div class="highlight-box warning">
          <div class="highlight-box-title">⚠️ SAI LẦM THƯỜNG GẶP</div>
          <p>Ba mẹ thường nhảy từ mức 1 (cầm tay) sang mức 4 (để bé tự làm) rồi thất vọng. 
          PHẢI đi qua từng mức, mỗi mức ít nhất 1-2 tuần. Kiên nhẫn là chìa khóa!</p>
        </div>
      </div>

      <!-- Understanding Attention -->
      <div class="content-block">
        <h2>🔍 Hiểu về "tập trung" ở trẻ tự kỷ</h2>
        <p>Trẻ tự kỷ không phải "không tập trung" — bé tập trung KHÁC:</p>
        <ul>
          <li><strong>Joint Attention (chú ý liên kết):</strong> Bé khó chia sẻ sự chú ý với người khác. VD: Ba chỉ con chim, bé không nhìn theo.</li>
          <li><strong>Selective Attention (chú ý chọn lọc):</strong> Bé khó lọc bỏ kích thích không liên quan. Tiếng quạt, ánh sáng, bóng trên tường đều "hấp dẫn" như bài tập.</li>
          <li><strong>Sustained Attention (chú ý duy trì):</strong> Bé CÓ THỂ tập trung rất lâu vào thứ bé thích (VD: xem con vật). Vấn đề là chuyển sự tập trung sang thứ ba mẹ muốn.</li>
        </ul>
        <p><strong>Giải pháp:</strong> Đưa thứ bé thích VÀO bài học. Không phải "dẹp con vật đi, học bài đi!" mà là "Nào, hôm nay mình đếm xem có mấy con voi nhé!"</p>
      </div>
    </div>
  `;
}

export function renderDailyRoutine() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge orange">📅 Lịch trình mẫu</div>
        <h1 class="section-title">Lịch trình học tập mỗi ngày</h1>
        <p class="section-subtitle">
          Mẫu lịch trình cho buổi học tại phòng (30-45 phút). 
          Áp dụng sau khi bé đi học về hoặc vào cuối tuần.
        </p>
      </div>

      <div class="content-block">
        <h2>⏰ Buổi học mẫu (40 phút)</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:00 - 0:05</div>
            <div class="timeline-title">🏃 Khởi động vận động (5 phút)</div>
            <div class="timeline-desc">Cho bé nhảy trampoline, đi bộ như con vật, hoặc đập gối. Mục đích: xả năng lượng, chuẩn bị cơ thể cho việc ngồi yên.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:05 - 0:07</div>
            <div class="timeline-title">📋 Xem lịch trình (2 phút)</div>
            <div class="timeline-desc">Dẫn bé đến bảng lịch trình. Cho bé di chuyển mũi tên "đang ở đây" đến hoạt động đầu tiên. Cho bé xem thẻ "Trước/Sau".</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:07 - 0:17</div>
            <div class="timeline-title">📚 Phiên học 1 — Bài tập bàn (10 phút)</div>
            <div class="timeline-desc">2-3 bài từ work station (bài đã thạo). Bé tự lấy rổ trái → làm → bỏ hộp XONG. Đặt visual timer cho 10 phút.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:17 - 0:22</div>
            <div class="timeline-title">🧘 Nghỉ cảm giác (5 phút)</div>
            <div class="timeline-desc">Bé đến góc bình tĩnh hoặc khu vận động. Nghe nhạc nhẹ, nằm bean bag, hoặc chơi fidget. KHÔNG cho xem màn hình.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:22 - 0:32</div>
            <div class="timeline-title">📖 Phiên học 2 — Đọc hiểu / Trò chơi (10 phút)</div>
            <div class="timeline-desc">Bài tập đọc hiểu với chủ đề động vật, hoặc trò chơi phân loại/ghép thẻ. Có thể ngồi sàn ở khu sáng tạo nếu bé mệt.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:32 - 0:37</div>
            <div class="timeline-title">🎨 Hoạt động sáng tạo (5 phút)</div>
            <div class="timeline-desc">Nặn đất sét, vẽ theo bước, dán sticker. Hoạt động "tay bận" giúp bé thư giãn + giảm stimming.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">0:37 - 0:40</div>
            <div class="timeline-title">🎁 Kết thúc & Khen thưởng (3 phút)</div>
            <div class="timeline-desc">Bé di chuyển mũi tên lịch trình đến "XONG". Dán sticker con vật lên token board. Nếu đủ 5 sticker → phần thưởng lớn (xem video thú vật 2-3 phút).</div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <h2>📌 Lịch trình theo tuần</h2>
        <table class="week-table">
          <thead>
            <tr><th>Ngày</th><th>Buổi chiều (sau học)</th><th>Trọng tâm</th></tr>
          </thead>
          <tbody>
            <tr><td>Thứ 2</td><td>Phiên học 40 phút</td><td>Bài tập bàn + Đọc hiểu</td></tr>
            <tr><td>Thứ 3</td><td>Phiên học 40 phút</td><td>Bài tập bàn + Vận động</td></tr>
            <tr><td>Thứ 4</td><td>Phiên học 40 phút</td><td>Bài tập bàn + Sáng tạo</td></tr>
            <tr><td>Thứ 5</td><td>Phiên học 40 phút</td><td>Bài tập bàn + Đọc hiểu</td></tr>
            <tr><td>Thứ 6</td><td>Phiên học 40 phút</td><td>Bài tập bàn + Trò chơi</td></tr>
            <tr><td>Thứ 7</td><td>Tự do có cấu trúc</td><td>Chơi tự do trong phòng + 1 bài tập nhẹ</td></tr>
            <tr><td>Chủ nhật</td><td>Nghỉ hoặc đi chơi</td><td>Áp dụng kỹ năng ngoài môi trường (siêu thị, công viên)</td></tr>
          </tbody>
        </table>

        <div class="highlight-box tip">
          <div class="highlight-box-title">💡 MẸO QUAN TRỌNG</div>
          <p>Giữ lịch trình NHẤT QUÁN mỗi ngày. Não bé tự kỷ hoạt động tốt nhất với sự dự đoán được. 
          Nếu có thay đổi, báo cho bé TRƯỚC bằng visual (thẻ "Hôm nay khác").</p>
        </div>
      </div>

      <!-- Visual Schedule Template -->
      <div class="content-block">
        <h2>🖼️ Mẫu bảng lịch trình visual</h2>
        <p>In các thẻ này, ép plastic, dán velcro phía sau. Gắn lên bảng theo thứ tự:</p>
        <div class="zone-grid">
          <div class="zone-card" style="border-color: var(--primary-300);">
            <span class="zone-emoji">🏃</span>
            <h4>Vận động</h4>
            <p>Thẻ 1</p>
          </div>
          <div class="zone-card" style="border-color: var(--accent-300);">
            <span class="zone-emoji">📋</span>
            <h4>Xem lịch</h4>
            <p>Thẻ 2</p>
          </div>
          <div class="zone-card" style="border-color: var(--success-400);">
            <span class="zone-emoji">📚</span>
            <h4>Học bài</h4>
            <p>Thẻ 3</p>
          </div>
          <div class="zone-card" style="border-color: var(--info-400);">
            <span class="zone-emoji">🧘</span>
            <h4>Nghỉ ngơi</h4>
            <p>Thẻ 4</p>
          </div>
          <div class="zone-card" style="border-color: var(--primary-300);">
            <span class="zone-emoji">📖</span>
            <h4>Đọc/Chơi</h4>
            <p>Thẻ 5</p>
          </div>
          <div class="zone-card" style="border-color: var(--accent-300);">
            <span class="zone-emoji">🎨</span>
            <h4>Sáng tạo</h4>
            <p>Thẻ 6</p>
          </div>
          <div class="zone-card" style="border-color: var(--success-400);">
            <span class="zone-emoji">🌟</span>
            <h4>Phần thưởng</h4>
            <p>Thẻ 7</p>
          </div>
          <div class="zone-card" style="border-color: var(--warning-400);">
            <span class="zone-emoji">✅</span>
            <h4>XONG</h4>
            <p>Thẻ cuối</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderTracker() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge teal">📊 Ghi nhận mỗi ngày</div>
        <h1 class="section-title">Theo dõi tiến trình của bé</h1>
        <p class="section-subtitle">
          Ghi lại mỗi ngày để nhìn thấy sự tiến bộ. Dữ liệu được lưu trên trình duyệt của bạn.
        </p>
      </div>

      <div class="content-block">
        <h2>📝 Ghi nhận buổi học hôm nay</h2>
        <form class="tracker-form" id="tracker-form">
          <div class="form-row">
            <div class="form-group">
              <label for="track-date">📅 Ngày</label>
              <input type="date" id="track-date" />
            </div>
            <div class="form-group">
              <label for="track-focus">⏱️ Thời gian tập trung (phút)</label>
              <input type="number" id="track-focus" min="0" max="120" placeholder="VD: 15" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="track-tasks">📚 Số bài hoàn thành</label>
              <input type="number" id="track-tasks" min="0" max="20" placeholder="VD: 3" />
            </div>
            <div class="form-group">
              <label for="track-independence">🧍 Mức độ độc lập</label>
              <select id="track-independence">
                <option value="1">1 — Cần cầm tay liên tục</option>
                <option value="2">2 — Cần chỉ tay / nhắc lời</option>
                <option value="3">3 — Bé tự làm khi ba mẹ ngồi cạnh</option>
                <option value="4">4 — Bé tự làm, ba mẹ ngồi xa</option>
                <option value="5">5 — Bé tự làm, ba mẹ vắng mặt</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="track-scripting">🗣️ Mức độ nói linh tinh</label>
              <select id="track-scripting">
                <option value="high">Nhiều — nói gần như liên tục</option>
                <option value="medium">Trung bình — thỉnh thoảng</option>
                <option value="low">Ít — chỉ khi chuyển hoạt động</option>
                <option value="none">Không — im lặng hoặc nói đúng bài</option>
              </select>
            </div>
            <div class="form-group">
              <label for="track-stimming">🤚 Mức độ stimming (tay qươ qươ)</label>
              <select id="track-stimming">
                <option value="high">Nhiều — gần như liên tục</option>
                <option value="medium">Trung bình — lúc chuyển bài / hưng phấn</option>
                <option value="low">Ít — có nhưng giảm rõ</option>
                <option value="none">Không thấy trong buổi học</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="track-mood">😊 Tâm trạng bé</label>
            <select id="track-mood">
              <option value="happy">😊 Vui vẻ, hợp tác</option>
              <option value="neutral">😐 Bình thường</option>
              <option value="resistant">😣 Chống đối, không muốn làm</option>
              <option value="upset">😢 Buồn, khóc</option>
              <option value="excited">🤩 Hưng phấn quá mức</option>
            </select>
          </div>
          <div class="form-group">
            <label for="track-notes">📝 Ghi chú thêm</label>
            <textarea id="track-notes" placeholder="VD: Hôm nay bé tự lấy rổ bài mà không cần nhắc! Thích bài ghép thẻ con vật nhất."></textarea>
          </div>
          <div class="form-group">
            <label for="track-rating">⭐ Đánh giá tổng thể buổi học</label>
            <div class="star-rating" id="star-rating">
              <span class="star-btn" data-rating="1">⭐</span>
              <span class="star-btn" data-rating="2">⭐</span>
              <span class="star-btn" data-rating="3">⭐</span>
              <span class="star-btn" data-rating="4">⭐</span>
              <span class="star-btn" data-rating="5">⭐</span>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">💾 Lưu ghi nhận</button>
        </form>
      </div>

      <!-- Previous Entries -->
      <div class="content-block">
        <h2>📋 Lịch sử ghi nhận</h2>
        <div id="tracker-entries" class="tracker-entries">
          <p style="text-align: center; color: var(--text-tertiary); padding: var(--space-8);">
            Chưa có ghi nhận nào. Hãy bắt đầu ghi lại buổi học đầu tiên! 🌱
          </p>
        </div>
      </div>

      <!-- Progress Summary -->
      <div class="content-block">
        <h2>📈 Tổng quan tiến trình</h2>
        <div id="progress-summary" class="stat-grid">
          <div class="stat-card">
            <div class="stat-value orange" id="total-sessions">0</div>
            <div class="stat-label">Tổng buổi học</div>
          </div>
          <div class="stat-card">
            <div class="stat-value teal" id="avg-focus">0</div>
            <div class="stat-label">TB phút tập trung</div>
          </div>
          <div class="stat-card">
            <div class="stat-value green" id="avg-tasks">0</div>
            <div class="stat-label">TB bài/buổi</div>
          </div>
          <div class="stat-card">
            <div class="stat-value purple" id="avg-independence">0</div>
            <div class="stat-label">TB mức độc lập</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderResources() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div class="section-badge purple">📚 Tham khảo thêm</div>
        <h1 class="section-title">Tài liệu & Phương pháp</h1>
        <p class="section-subtitle">
          Các phương pháp khoa học và tài nguyên hữu ích cho ba mẹ có con tự kỷ.
        </p>
      </div>

      <div class="content-block">
        <h2>🔬 Phương pháp khoa học được sử dụng</h2>
        <ul class="resource-list">
          <li class="resource-item">
            <span class="resource-icon">🧩</span>
            <div class="resource-content">
              <h4>TEACCH (Structured Teaching)</h4>
              <p>Phương pháp dạy học có cấu trúc cho trẻ tự kỷ, phát triển tại Đại học North Carolina. Tập trung vào cấu trúc vật lý, lịch trình trực quan, 
              hệ thống làm việc, và cấu trúc nhiệm vụ. Đây là nền tảng cho phần "Setup phòng" và "Work Station" trong app này.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">🎯</span>
            <div class="resource-content">
              <h4>ABA (Applied Behavior Analysis)</h4>
              <p>Phân tích hành vi ứng dụng — phương pháp can thiệp có bằng chứng mạnh nhất cho trẻ tự kỷ. 
              ABA hiện đại tập trung vào tăng cường hành vi tích cực, dạy kỹ năng thay thế, và tôn trọng sự tự chủ của trẻ.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">🤸</span>
            <div class="resource-content">
              <h4>OT (Occupational Therapy) - Trị liệu hoạt động</h4>
              <p>Giúp trẻ phát triển kỹ năng vận động tinh, xử lý cảm giác, và tự lập trong sinh hoạt hàng ngày. 
              Các bài tập sensory trong app này dựa trên nguyên tắc OT.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">📖</span>
            <div class="resource-content">
              <h4>Visual Supports & PECS</h4>
              <p>Hệ thống giao tiếp bằng hình ảnh (Picture Exchange Communication System). 
              Sử dụng thẻ hình ảnh, lịch trình visual, bảng "Trước/Sau" để hỗ trợ giao tiếp và dự đoán.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>📖 Sách đề xuất cho ba mẹ</h2>
        <ul class="resource-list">
          <li class="resource-item">
            <span class="resource-icon">📕</span>
            <div class="resource-content">
              <h4>"The Verbal Behavior Approach" - Mary Barbera</h4>
              <p>Hướng dẫn thực tế cho ba mẹ về cách dạy ngôn ngữ cho trẻ tự kỷ bằng phương pháp ABA/VB. Rất phù hợp cho trường hợp bé đọc giỏi nhưng chưa hiểu.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">📗</span>
            <div class="resource-content">
              <h4>"Visual Strategies for Improving Communication" - Linda Hodgdon</h4>
              <p>Giải thích chi tiết cách tạo và sử dụng visual supports. Có nhiều mẫu thẻ có thể photocopy và dùng ngay.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">📘</span>
            <div class="resource-content">
              <h4>"An Early Start for Your Child with Autism" - Sally Rogers</h4>
              <p>Mô hình ESDM (Early Start Denver Model) — giúp ba mẹ can thiệp sớm thông qua các hoạt động chơi tự nhiên hàng ngày.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>🌐 Nguồn tài nguyên online</h2>
        <ul class="resource-list">
          <li class="resource-item">
            <span class="resource-icon">🖥️</span>
            <div class="resource-content">
              <h4>TEACCH Autism Program (teacch.com)</h4>
              <p>Website chính thức của chương trình TEACCH — có nhiều tài liệu hướng dẫn miễn phí về structured teaching.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">🎥</span>
            <div class="resource-content">
              <h4>The Autism Helper (theautismhelper.com)</h4>
              <p>Blog + kênh YouTube với hàng trăm bài tập có thể in, video hướng dẫn setup work station, và ý tưởng hoạt động.</p>
            </div>
          </li>
          <li class="resource-item">
            <span class="resource-icon">📱</span>
            <div class="resource-content">
              <h4>App: "Visual Timer" & "First Then Visual Schedule"</h4>
              <p>2 app miễn phí trên iOS/Android. Visual Timer hiển thị thời gian còn lại dạng hình tròn. First Then cho phép tạo bảng Trước/Sau bằng ảnh thật.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>⚠️ Lưu ý quan trọng</h2>
        <div class="highlight-box warning">
          <div class="highlight-box-title">⚠️ TUYÊN BỐ MIỄN TRỪ</div>
          <p>Nội dung trong ứng dụng này được tổng hợp từ các phương pháp khoa học có bằng chứng (TEACCH, ABA, OT) 
          và được tùy chỉnh theo đặc điểm cụ thể của bé. Tuy nhiên, đây KHÔNG thay thế cho đánh giá và can thiệp chuyên nghiệp 
          từ BCBA (Board Certified Behavior Analyst), chuyên gia tâm lý, hoặc chuyên gia trị liệu ngôn ngữ/hoạt động.</p>
          <p style="margin-top: var(--space-2);">Nếu bé có hành vi tự gây thương tích, gây hấn, hoặc thoái lui rõ rệt, 
          hãy tham khảo ý kiến chuyên gia trước khi áp dụng.</p>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// Render Today Section (Hôm nay học gì & In ấn)
// ============================================
export function renderToday() {
  const todayStr = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <div class="fade-in">
      <!-- Screen Only Top Section -->
      <div class="section-header no-print">
        <div class="section-badge orange">🌟 Lịch trình & In bài tập hôm nay</div>
        <h1 class="section-title">Hôm nay học gì, làm gì?</h1>
        <p class="section-subtitle">
          Tạo bảng lịch trình trực quan cho bé & in bộ bài tập 3 rổ TEACCH chuẩn A4 
          dành riêng cho máy in màu <strong>Brother HL-L3280CDW</strong> của Ba.
        </p>
      </div>

      <!-- Print Action Bar (Screen Only) -->
      <div class="print-action-bar no-print" style="background: var(--bg-card); border: 2px solid var(--accent-orange); border-radius: var(--radius-lg); padding: var(--space-6); margin-bottom: var(--space-8); box-shadow: var(--shadow-md);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="font-size: var(--text-lg); font-weight: 700; color: var(--accent-orange); display: flex; align-items: center; gap: 8px;">
              <span>🖨️ Máy in Laser Màu Brother HL-L3280CDW</span>
              <span style="background: #22c55e; color: white; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: 700;">Đã sẵn sàng in A4</span>
            </div>
            <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 4px;">
              Hình ảnh sắc nét, viền khung rõ màu sắc, nét đứt kéo cắt ✂️ tối ưu cho máy in laser đơn năng màu.
            </div>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="btn-print-all" class="btn btn-primary" style="background: linear-gradient(135deg, #f97316, #ea580c); font-weight: 700; gap: 6px;">
              🖨️ In Tất Cả (Bảng + 3 Rổ)
            </button>
            <button id="btn-print-schedule" class="btn btn-secondary" style="font-weight: 600;">
              📋 Chỉ in Bảng Hôm Nay
            </button>
            <button id="btn-print-worksheets" class="btn btn-secondary" style="font-weight: 600;">
              📝 Chỉ in 3 Rổ Bài Tập
            </button>
          </div>
        </div>

        <!-- Controls: Select Week / Level / Theme -->
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px dashed var(--border-color); display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <label style="font-weight: 600; font-size: var(--text-sm);">🎯 Cấp độ tập trung:</label>
            <select id="today-week-select" class="form-select" style="padding: 6px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-weight: 600; background: var(--bg-primary); color: var(--text-primary);">
              <option value="1" selected>Tuần 1: Khởi động 5-7 phút (Ba mẹ ngồi cạnh)</option>
              <option value="2">Tuần 2: 7-10 phút (Ba mẹ ngồi cách 1m)</option>
              <option value="3">Tuần 3: 10-15 phút (Ba mẹ ngồi cách 2m)</option>
              <option value="4">Tuần 4: 15-20+ phút (Bé tự làm độc lập 🎉)</option>
            </select>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <label style="font-weight: 600; font-size: var(--text-sm);">📚 Trình độ học vấn:</label>
            <select id="today-level-select" class="form-select" style="padding: 6px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-weight: 700; background: rgba(59, 130, 246, 0.1); color: #2563eb;">
              <option value="grade1-std" selected>🎓 Mức 2: Chuẩn Lớp 1 (Đọc hiểu, Toán cộng/trừ 10, So sánh)</option>
              <option value="grade1-adv">🚀 Mức 3: Lớp 1 Nâng cao (Toán 20, Đọc đoạn văn & Trả lời)</option>
              <option value="easy">🌱 Mức 1: Khởi động (Làm quen rổ - Dễ)</option>
            </select>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <label style="font-weight: 600; font-size: var(--text-sm);">📅 Bài tập theo Thứ:</label>
            <select id="today-day-select" class="form-select" style="padding: 6px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-weight: 600; background: var(--bg-primary); color: var(--text-primary);">
              <option value="mon" selected>Thứ 2 (Bài Sư tử & Voi)</option>
              <option value="tue">Thứ 3 (Bài Thỏ Trắng & Cà rốt)</option>
              <option value="wed">Thứ 4 (Bài Cá Heo Biển)</option>
              <option value="thu">Thứ 5 (Bài Chó Vàng Lô Lô)</option>
              <option value="fri">Thứ 6 (Bài Hươu Cao Cổ)</option>
              <option value="sat">Thứ 7 (Bài Chú Khỉ Nhanh Nhẹn)</option>
              <option value="sun">Chủ Nhật (Bài Chim Cánh Cụt)</option>
            </select>
          </div>

          <button id="btn-refresh-worksheets" class="btn btn-secondary" style="background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid #10b981; font-weight: 700; gap: 6px;">
            🎲 Đổi Đề Bài Ngẫu Nhiên
          </button>
        </div>
      </div>

      <!-- ============================================================== -->
      <!-- PRINTABLE AREA 1: BẢNG LỊCH TRÌNH HÔM NAY (DAILY VISUAL BOARD)  -->
      <!-- ============================================================== -->
      <div id="printable-schedule" class="printable-section content-block" style="background: var(--bg-card); border-radius: var(--radius-xl); padding: var(--space-8); margin-bottom: var(--space-8);">
        
        <!-- Print Header -->
        <div class="print-header" style="border-bottom: 3px double var(--accent-orange); padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <div style="font-size: 22px; font-weight: 900; color: #ea580c; font-family: 'Quicksand', sans-serif;">
              🧩 I AM DAD — BẢNG KẾ HOẠCH HỌC TẬP HÔM NAY
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;">
              Hệ thống dạy học có cấu trúc (TEACCH) · Dành cho bé nhà mình (6 tuổi)
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 14px; font-weight: 700; color: var(--text-primary); text-transform: capitalize;">
              📅 ${todayStr}
            </div>
            <div style="font-size: 12px; color: #16a34a; font-weight: 600;">
              Mục tiêu: <span id="week-target-text">5-7 phút tập trung</span>
            </div>
          </div>
        </div>

        <!-- First / Then Visual Reminder -->
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center; background: rgba(249, 115, 22, 0.06); border: 2px dashed #f97316; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <div style="text-align: center;">
            <div style="font-size: 12px; font-weight: 800; color: #ea580c; text-transform: uppercase;">1. TRƯỚC TIÊN (FIRST)</div>
            <div style="font-size: 32px; margin: 4px 0;">✏️ 🧺</div>
            <div style="font-size: 14px; font-weight: 700; color: var(--text-primary);">Hoàn thành 3 Rổ Bài Tập</div>
          </div>
          <div style="font-size: 28px; font-weight: 900; color: #f97316;">➔</div>
          <div style="text-align: center;">
            <div style="font-size: 12px; font-weight: 800; color: #16a34a; text-transform: uppercase;">2. SAU ĐÓ (THEN)</div>
            <div style="font-size: 32px; margin: 4px 0;">🦁 🎬 🌟</div>
            <div style="font-size: 14px; font-weight: 700; color: #16a34a;">Thưởng 5p Video Sư Tử + Sticker</div>
          </div>
        </div>

        <!-- Today Routine Steps -->
        <h3 style="margin-bottom: 16px; font-size: 18px; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
          <span>📋</span> Các bước thực hiện phiên học 40 phút:
        </h3>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          
          <!-- Step 1 -->
          <div class="schedule-step-item" style="display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: var(--bg-primary); border-left: 5px solid #06b6d4; border-radius: 8px; border: 1px solid var(--border-color); border-left-width: 5px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #06b6d4; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0;">1</div>
            <div style="font-size: 26px;">🏃</div>
            <div style="flex: 1;">
              <div style="font-size: 15px; font-weight: 700; color: var(--text-primary);">Vận động cảm giác (Sensory Warm-up) — 5 phút</div>
              <div style="font-size: 13px; color: var(--text-secondary);">Nhún bạt nhún Mini Trampoline 3 phút + Uống 1 ngụm nước ấm</div>
            </div>
            <div class="print-checkbox" style="width: 24px; height: 24px; border: 2px solid #06b6d4; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #06b6d4;">☐</div>
          </div>

          <!-- Step 2 -->
          <div class="schedule-step-item" style="display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: var(--bg-primary); border-left: 5px solid #3b82f6; border-radius: 8px; border: 1px solid var(--border-color); border-left-width: 5px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0;">2</div>
            <div style="font-size: 26px;">🧺</div>
            <div style="flex: 1;">
              <div style="font-size: 15px; font-weight: 700; color: var(--text-primary);">RỔ 1 (Bên Trái): Ghép thẻ Động vật — 7 phút</div>
              <div style="font-size: 13px; color: var(--text-secondary);">Ghép 6 cặp thẻ động vật hoang dã ➔ Xong thả thẻ vào Hộp XONG bên phải</div>
            </div>
            <div class="print-checkbox" style="width: 24px; height: 24px; border: 2px solid #3b82f6; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #3b82f6;">☐</div>
          </div>

          <!-- Step 3 -->
          <div class="schedule-step-item" style="display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: var(--bg-primary); border-left: 5px solid #f59e0b; border-radius: 8px; border: 1px solid var(--border-color); border-left-width: 5px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #f59e0b; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0;">3</div>
            <div style="font-size: 26px;">🔢</div>
            <div style="flex: 1;">
              <div style="font-size: 15px; font-weight: 700; color: var(--text-primary);">RỔ 2 (Giữa): Đếm số & Phép cộng phạm vi 10 — 10 phút</div>
              <div style="font-size: 13px; color: var(--text-secondary);">Đếm số lượng con vật & viết kết quả phép cộng ➔ Thả phiếu vào Hộp XONG</div>
            </div>
            <div class="print-checkbox" style="width: 24px; height: 24px; border: 2px solid #f59e0b; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #f59e0b;">☐</div>
          </div>

          <!-- Step 4 -->
          <div class="schedule-step-item" style="display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: var(--bg-primary); border-left: 5px solid #8b5cf6; border-radius: 8px; border: 1px solid var(--border-color); border-left-width: 5px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #8b5cf6; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0;">4</div>
            <div style="font-size: 26px;">🎨</div>
            <div style="flex: 1;">
              <div style="font-size: 15px; font-weight: 700; color: var(--text-primary);">RỔ 3 (Bên Phải): Tô màu & Tập viết từ — 8 phút</div>
              <div style="font-size: 13px; color: var(--text-secondary);">Tô màu con sư tử theo số + đồ nét viết chữ "SƯ TỬ" ➔ Thả phiếu vào Hộp XONG</div>
            </div>
            <div class="print-checkbox" style="width: 24px; height: 24px; border: 2px solid #8b5cf6; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #8b5cf6;">☐</div>
          </div>

          <!-- Step 5 -->
          <div class="schedule-step-item" style="display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: rgba(34, 197, 94, 0.08); border-left: 5px solid #22c55e; border-radius: 8px; border: 1px solid #22c55e; border-left-width: 5px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #22c55e; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0;">5</div>
            <div style="font-size: 26px;">🌟</div>
            <div style="flex: 1;">
              <div style="font-size: 15px; font-weight: 700; color: #15803d;">HOÀN THÀNH — Nhận thưởng! 🎉</div>
              <div style="font-size: 13px; color: #166534;">Xem 1 video 3 phút về Động vật hoang dã + Dán 1 Sticker con vật lên Token Board</div>
            </div>
            <div class="print-checkbox" style="width: 24px; height: 24px; border: 2px solid #22c55e; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #22c55e;">☐</div>
          </div>
        </div>

        <!-- Note for Dad -->
        <div style="margin-top: 24px; padding: 14px; background: #fff7ed; border-radius: 8px; border: 1px solid #fed7aa; font-size: 13px; color: #9a3412;">
          <strong>💡 Ghi chú cho Ba hôm nay:</strong> <span id="dad-note-text">Ngồi cạnh bé, hỗ trợ tay-trên-tay khi cần. Chỉ nhắc bằng cử chỉ (không nói nhiều để bé không bị phụ thuộc giọng nói).</span>
        </div>
      </div>

      <!-- ============================================================== -->
      <!-- PRINTABLE AREA 2: 3 RỔ BÀI TẬP TEACCH (A4 WORKSHEETS)           -->
      <!-- ============================================================== -->
      <div id="printable-worksheets" class="printable-section">
        ${renderWorksheetsHTML('grade1-std')}
      </div>

    </div>
  `;
}

// ============================================
// DYNAMIC DAY PACKS BANK (7 Days of Unique Exercises)
// ============================================
const DYNAMIC_DAY_PACKS = {
  mon: {
    dayLabel: 'Thứ Hai — Chủ đề: Sở thú Rừng Xanh 🦁',
    ro1: [
      { desc: '1. "Chúa sơn lâm sống ở trong rừng xù bờm oai phong"', emoji: '🦁', name: 'SƯ TỬ' },
      { desc: '2. "Thích ăn cỏ, có vòi rất dài và đôi tai to như cái quạt"', emoji: '🐘', name: 'CON VOI' },
      { desc: '3. "Có chiếc cổ rất dài để vươn lên ăn lá cây trên cao"', emoji: '🦒', name: 'HƯƠU CAO CỔ' },
      { desc: '4. "Không biết bay, bơi rất giỏi và sống ở Nam Cực lạnh giá"', emoji: '🐧', name: 'CHIM CÁNH CỤT' }
    ],
    mathEqs: [
      { text: '7 + 3 = ', ans: '10' },
      { text: '10 - 4 = ', ans: '6' },
      { text: '6 + 3 = ', ans: '9' },
      { text: '9 - 5 = ', ans: '4' }
    ],
    mathComp: [
      { a: 8, b: 5 }, { a: 4, b: 7 }, { a: 9, b: 9 }, { a: 3, b: 6 }
    ],
    mathSeq: [
      'a) 2 ,  4 ,  6 ,  [ ____ ] ,  10',
      'b) 10 ,  9 ,  8 ,  [ ____ ] ,  6'
    ],
    passage: 'Sư tử sống ở trong rừng xanh. Sư tử thích ăn thịt và săn bắt. Còn con voi rất to lớn và chỉ thích ăn cỏ. Cả hai đều là những loài động vật rất khỏe mạnh.',
    q1: { text: '1. Sư tử sống ở đâu?', optA: 'A. Trong rừng xanh', optB: 'B. Dưới đáy biển' },
    q2: { text: '2. Con vật nào rất to lớn và thích ăn cỏ?', optA: 'A. Con Sư tử', optB: 'B. Con Voi' },
    wordHint: '[ Con voi ] [ thích ăn cỏ ]'
  },
  tue: {
    dayLabel: 'Thứ Ba — Chủ đề: Thỏ Trắng & Nông Trại 🐰',
    ro1: [
      { desc: '1. "Có đôi tai rất dài, bộ lông trắng muốt và nhảy rất nhanh"', emoji: '🐰', name: 'CON THỎ' },
      { desc: '2. "Sống ở nông trại, kêu ục ịch và có chiếc mũi hồng"', emoji: '🐷', name: 'CON LỢN' },
      { desc: '3. "Cho con người sữa thơm ngon, kêu ọc ọc trên đồng cỏ"', emoji: '🐮', name: 'BÒ SỮA' },
      { desc: '4. "Biết gáy ó o o mỗi buổi sáng sớm thức dậy"', emoji: '🐓', name: 'GÀ TRỐNG' }
    ],
    mathEqs: [
      { text: '5 + 4 = ', ans: '9' },
      { text: '8 - 3 = ', ans: '5' },
      { text: '7 + 2 = ', ans: '9' },
      { text: '10 - 6 = ', ans: '4' }
    ],
    mathComp: [
      { a: 9, b: 6 }, { a: 3, b: 8 }, { a: 7, b: 7 }, { a: 5, b: 10 }
    ],
    mathSeq: [
      'a) 1 ,  3 ,  5 ,  [ ____ ] ,  9',
      'b) 8 ,  7 ,  6 ,  [ ____ ] ,  4'
    ],
    passage: 'Chú Thỏ Trắng có bộ lông mềm mại như bông. Thỏ có đôi tai dài và hai mắt đỏ tròn xoe. Thỏ Trắng chạy nhảy rất nhanh và cực kỳ thích ăn cà rốt tươi ngon.',
    q1: { text: '1. Chú Thỏ Trắng thích ăn gì nhất?', optA: 'A. Cà rốt tươi ngon', optB: 'B. Cá nướng' },
    q2: { text: '2. Đôi tai của Thỏ Trắng như thế nào?', optA: 'A. Đôi tai rất ngắn', optB: 'B. Đôi tai rất dài' },
    wordHint: '[ Thỏ Trắng ] [ thích ăn cà rốt ]'
  },
  wed: {
    dayLabel: 'Thứ Tư — Chủ đề: Sinh Vật Biển Kỳ Diệu 🐬',
    ro1: [
      { desc: '1. "Bơi lội thông minh dưới biển xanh, biết nhảy khỏi mặt nước"', emoji: '🐬', name: 'CÁ HEO' },
      { desc: '2. "Mang chiếc mang cứng trên lưng, di chuyển rất chậm chạp"', emoji: '🐢', name: 'RÙA BIỂN' },
      { desc: '3. "Loài cá hung dữ lớn nhất đại dương với hàm răng sắc nhọn"', emoji: '🦈', name: 'CÁ MẬP' },
      { desc: '4. "Có 8 chiếc vòi dài và phun ra mực đen khi gặp nguy hiểm"', emoji: '🐙', name: 'BẠCH TUỘC' }
    ],
    mathEqs: [
      { text: '6 + 4 = ', ans: '10' },
      { text: '10 - 5 = ', ans: '5' },
      { text: '4 + 4 = ', ans: '8' },
      { text: '9 - 3 = ', ans: '6' }
    ],
    mathComp: [
      { a: 10, b: 8 }, { a: 2, b: 6 }, { a: 5, b: 5 }, { a: 7, b: 9 }
    ],
    mathSeq: [
      'a) 3 ,  6 ,  9 ,  [ ____ ] ,  15',
      'b) 20 ,  15 ,  10 ,  [ ____ ] ,  0'
    ],
    passage: 'Cá Heo bơi lội dưới lòng đại dương xanh thẫm. Cá Heo rất thông minh và thân thiện với con người. Mỗi khi vui đùa, Cá Heo nhún mình nhảy vọt lên cao khỏi mặt nước.',
    q1: { text: '1. Cá Heo sống ở đâu?', optA: 'A. Lòng đại dương xanh', optB: 'B. Trên ngọn cây' },
    q2: { text: '2. Cá Heo là loài vật như thế nào?', optA: 'A. Hung dữ và đáng sợ', optB: 'B. Thông minh và thân thiện' },
    wordHint: '[ Cá Heo ] [ bơi rất giỏi ]'
  },
  thu: {
    dayLabel: 'Thứ Năm — Chủ đề: Thú Cưng Thân Thiết 🐕',
    ro1: [
      { desc: '1. "Thân thiết với gia đình, biết trông nhà và sủa gâu gâu"', emoji: '🐕', name: 'CON CHÓ' },
      { desc: '2. "Có đôi mắt tròn xoe, thích bắt chuột và kêu meo meo"', emoji: '🐱', name: 'CON MÈO' },
      { desc: '3. "Biết bơi dưới nước, kêu quạc quạc và có bộ lông mịn"', emoji: '🦆', name: 'CON VỊT' },
      { desc: '4. "Nhỏ nhắn béo tròn, thích chạy trên bánh xe quay"', emoji: '🐹', name: 'CHUỘT HAMSTER' }
    ],
    mathEqs: [
      { text: '3 + 7 = ', ans: '10' },
      { text: '10 - 2 = ', ans: '8' },
      { text: '5 + 5 = ', ans: '10' },
      { text: '8 - 4 = ', ans: '4' }
    ],
    mathComp: [
      { a: 6, b: 9 }, { a: 8, b: 8 }, { a: 10, b: 4 }, { a: 1, b: 5 }
    ],
    mathSeq: [
      'a) 2 ,  3 ,  4 ,  [ ____ ] ,  6',
      'b) 9 ,  8 ,  7 ,  [ ____ ] ,  5'
    ],
    passage: 'Chú chó Lô Lô có bộ lông vàng óng mượt. Lô Lô rất ngoan, biết nghe lời chủ và trông nhà rất giỏi. Mỗi chiều, Lô Lô thích chạy tung tăng trong sân bắt bóng xốp cùng bé.',
    q1: { text: '1. Chú chó Lô Lô có bộ lông màu gì?', optA: 'A. Bộ lông vàng óng', optB: 'B. Bộ lông màu đen' },
    q2: { text: '2. Lô Lô thích làm gì mỗi buổi chiều?', optA: 'A. Chơi bắt bóng xốp', optB: 'B. Nằm ngủ cả ngày' },
    wordHint: '[ Lô Lô ] [ trông nhà rất giỏi ]'
  },
  fri: {
    dayLabel: 'Thứ Sáu — Chủ đề: Muôn Thú Thiên Nhiên 🦒',
    ro1: [
      { desc: '1. "Có chiếc cổ rất dài để với tới những chiếc lá trên cao"', emoji: '🦒', name: 'HƯƠU CAO CỔ' },
      { desc: '2. "Có những sọc đen trắng dọc khắp cơ thể rất đẹp mắt"', emoji: '🦓', name: 'NGỰA VẰN' },
      { desc: '3. "Béo tròn ăn lá trúc, hai quầng mắt đen dễ thương"', emoji: '🐼', name: 'GẤU TRÚC' },
      { desc: '4. "Mũi có sừng nhọn, da dầy chắc chắn sống ở đồng cỏ"', emoji: '🦏', name: 'TÊ GIÁC' }
    ],
    mathEqs: [
      { text: '4 + 5 = ', ans: '9' },
      { text: '9 - 2 = ', ans: '7' },
      { text: '6 + 2 = ', ans: '8' },
      { text: '10 - 7 = ', ans: '3' }
    ],
    mathComp: [
      { a: 7, b: 4 }, { a: 5, b: 9 }, { a: 8, b: 8 }, { a: 6, b: 2 }
    ],
    mathSeq: [
      'a) 4 ,  6 ,  8 ,  [ ____ ] ,  12',
      'b) 12 ,  10 ,  8 ,  [ ____ ] ,  4'
    ],
    passage: 'Hươu cao cổ là loài động vật cao nhất thế giới. Hươu có chiếc cổ dài kỷ lục và bốn chiếc chân chắc chắn. Nhờ chiếc cổ dài, Hươu có thể ăn những mầm lá non ngọt ngào trên đỉnh cây.',
    q1: { text: '1. Hươu cao cổ là loài động vật như thế nào?', optA: 'A. Cao nhất thế giới', optB: 'B. Nhỏ nhất thế giới' },
    q2: { text: '2. Nhờ chiếc cổ dài, Hươu làm được gì?', optA: 'A. Ăn mầm lá trên đỉnh cây', optB: 'B. Đào hang dưới đất' },
    wordHint: '[ Hươu cao cổ ] [ ăn lá cây cao ]'
  },
  sat: {
    dayLabel: 'Thứ Bảy — Chủ đề: Thế Giới Rừng Xanh 🐒',
    ro1: [
      { desc: '1. "Trèo cây chuyền cành rất giỏi, cực kỳ thích ăn chuối chín"', emoji: '🐒', name: 'CON KHỈ' },
      { desc: '2. "Vua bầu trời với đôi mắt tinh anh và bộ cánh rộng"', emoji: '🦅', name: 'ĐẠI BÀNG' },
      { desc: '3. "Có chiếc đuôi xù to, thích nhặt hạt dẻ cất vào tổ"', emoji: '🐿️', name: 'CON SÓC' },
      { desc: '4. "Thông minh láu cá, có bộ lông màu cam đỏ nổi bật"', emoji: '🦊', name: 'CON CÁO' }
    ],
    mathEqs: [
      { text: '8 + 2 = ', ans: '10' },
      { text: '10 - 3 = ', ans: '7' },
      { text: '3 + 6 = ', ans: '9' },
      { text: '9 - 4 = ', ans: '5' }
    ],
    mathComp: [
      { a: 9, b: 10 }, { a: 6, b: 3 }, { a: 7, b: 7 }, { a: 4, b: 8 }
    ],
    mathSeq: [
      'a) 5 ,  10 ,  15 ,  [ ____ ] ,  25',
      'b) 15 ,  14 ,  13 ,  [ ____ ] ,  11'
    ],
    passage: 'Chú khỉ Nono sống trên những cây cổ thụ xanh tốt. Nono nhanh nhẹn trèo cây và chuyền cành liên tục. Món ăn khoái khẩu nhất của Nono là những quả chuối chín vàng ngọt lịm.',
    q1: { text: '1. Chú khỉ Nono trèo cây như thế nào?', optA: 'A. Nhanh nhẹn chuyền cành', optB: 'B. Chậm chạp không trèo được' },
    q2: { text: '2. Món ăn khoái khẩu của Nono là gì?', optA: 'A. Quả chuối chín vàng', optB: 'B. Quả ớt cay' },
    wordHint: '[ Chú khỉ ] [ trèo cây rất giỏi ]'
  },
  sun: {
    dayLabel: 'Chủ Nhật — Chủ đề: Băng Tuyết Nam Cực 🐧',
    ro1: [
      { desc: '1. "Dáng đi ỉch ảch, mặc áo đuôi tôm và bơi giỏi ở Nam Cực"', emoji: '🐧', name: 'CHIM CÁNH CỤT' },
      { desc: '2. "Thân hình khổng lồ trắng muốt sống ở vùng băng giá"', emoji: '🐻‍❄️', name: 'GẤU BẮC CỰC' },
      { desc: '3. "Nằm sưởi nắng trên bãi băng, có hai chiếc răng nanh dài"', emoji: '🦭', name: 'HẢI CẨU' },
      { desc: '4. "Khổng lồ dưới đại dương, biết phun cột nước lên trời"', emoji: '🐳', name: 'CÁ VOI' }
    ],
    mathEqs: [
      { text: '2 + 8 = ', ans: '10' },
      { text: '10 - 8 = ', ans: '2' },
      { text: '5 + 3 = ', ans: '8' },
      { text: '9 - 7 = ', ans: '2' }
    ],
    mathComp: [
      { a: 10, b: 10 }, { a: 3, b: 9 }, { a: 8, b: 2 }, { a: 4, b: 6 }
    ],
    mathSeq: [
      'a) 10 ,  20 ,  30 ,  [ ____ ] ,  50',
      'b) 7 ,  6 ,  5 ,  [ ____ ] ,  3'
    ],
    passage: 'Chim Cánh Cụt sống ở vùng Nam Cực quanh năm bao phủ bởi tuyết trắng. Dù không biết bay, Chim Cánh Cụt lại bơi lặn bắt cá dưới nước lạnh giá vô cùng tài tình.',
    q1: { text: '1. Chim Cánh Cụt sống ở đâu?', optA: 'A. Vùng Nam Cực băng giá', optB: 'B. Sa mạc cát nóng' },
    q2: { text: '2. Chim Cánh Cụt bơi lặn thế nào?', optA: 'A. Vô cùng tài tình', optB: 'B. Không biết bơi' },
    wordHint: '[ Chim Cánh Cụt ] [ bơi rất giỏi ]'
  }
};

// ============================================
// ============================================
// Dynamic Worksheets HTML Generator
// ============================================
export function renderWorksheetsHTML(level = 'grade1-std', dayKey = 'mon', randomSeed = 0, weekNum = '1') {
  if (level === 'easy') {
    return renderLevel1Easy();
  } else if (level === 'grade1-adv') {
    return renderLevel3Adv(dayKey, randomSeed, weekNum);
  } else {
    return renderLevel2Grade1Std(dayKey, randomSeed, weekNum);
  }
}

// Helper: Pseudo random number generator with seed
function getRandomInt(min, max, seed = 0) {
  if (seed > 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.floor((((min * 13 + max * 37 + 7) % 97) / 97) * (max - min + 1)) + min;
}

// --------------------------------------------
// MỨC 2: CHUẨN LỚP 1 DYNAMIC
// --------------------------------------------
function renderLevel2Grade1Std(dayKey = 'mon', randomSeed = 0, weekNum = '1') {
  const pack = DYNAMIC_DAY_PACKS[dayKey] || DYNAMIC_DAY_PACKS.mon;
  const nowTime = new Date().toLocaleTimeString('vi-VN');

  // Generate dynamic math problems based on weekNum & randomSeed
  const mathEqs = [];
  const baseCount = 6;
  
  for (let i = 0; i < baseCount; i++) {
    const isAdd = Math.random() > 0.4 || (i % 2 === 0);
    if (isAdd) {
      const a = getRandomInt(2, 6, randomSeed);
      const b = getRandomInt(1, 4, randomSeed + i + 1);
      mathEqs.push({ text: `${a} + ${b} = `, ans: (a + b).toString() });
    } else {
      const b = getRandomInt(1, 4, randomSeed + i);
      const sum = getRandomInt(b + 2, 10, randomSeed + i + 2);
      mathEqs.push({ text: `${sum} - ${b} = `, ans: (sum - b).toString() });
    }
  }

  // Generate dynamic number comparison
  const mathComp = [];
  for (let i = 0; i < 4; i++) {
    const a = getRandomInt(1, 10, randomSeed + i);
    const b = getRandomInt(1, 10, randomSeed + i + 4);
    mathComp.push({ a, b });
  }

  // Generate dynamic number sequence
  const startSeq1 = getRandomInt(1, 5, randomSeed);
  const stepSeq1 = getRandomInt(1, 2, randomSeed + 1);
  const startSeq2 = getRandomInt(8, 12, randomSeed + 2);
  const stepSeq2 = getRandomInt(1, 2, randomSeed + 3);
  const mathSeq = [
    `a) ${startSeq1} ,  ${startSeq1 + stepSeq1} ,  ${startSeq1 + stepSeq1 * 2} ,  [ ____ ] ,  ${startSeq1 + stepSeq1 * 4}`,
    `b) ${startSeq2} ,  ${startSeq2 - stepSeq2} ,  ${startSeq2 - stepSeq2 * 2} ,  [ ____ ] ,  ${startSeq2 - stepSeq2 * 4}`
  ];

  // Dynamic Word Problem based on Theme & Week & Random Numbers
  const n1 = getRandomInt(3, 6, randomSeed);
  const n2 = getRandomInt(1, 4, randomSeed + 1);
  const storyProblems = {
    mon: `🦁 Bé quan sát thấy có ${n1} con sư tử đang nằm nghỉ, sau đó có thêm ${n2} con sư tử nữa chạy tới. Hỏi có tất cả bao nhiêu con sư tử?`,
    tue: `🐰 Thỏ Trắng hái được ${n1} củ cà rốt, Thỏ Mẹ cho Thỏ Trắng thêm ${n2} củ nữa. Hỏi Thỏ Trắng có tất cả bao nhiêu củ cà rốt?`,
    wed: `🐬 Đàn cá heo có ${n1 + n2} con đang bơi lội, ${n2} con bơi đi chỗ khác. Hỏi còn lại bao nhiêu con cá heo?`,
    thu: `🐕 Trong sân có ${n1 + n2} chú chó Lô Lô đang chơi bóng, ${n2} chú chạy về chuồng. Hỏi còn lại bao nhiêu chú chó trên sân?`,
    fri: `🦒 Hươu cao cổ ăn ${n1} mầm lá buổi sáng và ${n2} mầm lá buổi chiều. Hỏi Hươu đã ăn tổng cộng bao nhiêu mầm lá?`,
    sat: `🐒 Chú khỉ Nono hái được ${n1 + n2} quả chuối, Nono ăn hết ${n2} quả. Hỏi Nono còn lại bao nhiêu quả chuối?`,
    sun: `🐧 Trên bãi băng có ${n1} chim cánh cụt, có ${n2} chim cánh cụt mới bơi lên. Hỏi trên bãi băng có tất cả bao nhiêu chim cánh cụt?`
  };

  const storyProblem = storyProblems[dayKey] || storyProblems.mon;

  return `
    <!-- LIVE GENERATION BANNER (SCREEN ONLY) -->
    <div class="no-print" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 12px 20px; border-radius: 12px; font-weight: 700; font-size: 15px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">⚡</span>
        <span>ĐÃ ĐỔI ĐỀ BÀI MỚI THÀNH CÔNG!</span>
      </div>
      <div style="font-size: 13px; opacity: 0.95; font-family: monospace;">
        🕒 Sinh lúc: ${nowTime} | Mã: #RAND-${randomSeed || 'BASE'}
      </div>
    </div>

    <!-- PAGE BREAK BEFORE WORKSHEET 1 -->
    <div class="page-break-before"></div>

    <!-- RỔ 1 WORKSHEET (LỚP 1): ĐỌC CÂU & NỐI NÉT ĐỘNG VẬT -->
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #2563eb; border-radius: 16px; padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #2563eb; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 1 — ${pack.dayLabel} (Tuần ${weekNum})</span>
          <h2 style="margin: 6px 0 0 0; color: #1e40af; font-size: 20px;">📖 ĐỌC MÔ TẢ & NỐI VỚI ĐỘNG VẬT TƯƠNG ỨNG</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">
          Mã đề: T${weekNum}-${dayKey.toUpperCase()}-${randomSeed > 0 ? 'R' + randomSeed : 'STD'}
        </div>
      </div>

      <div style="font-size: 13px; color: #1e40af; margin-bottom: 20px; background: #eff6ff; padding: 10px 14px; border-radius: 8px; border-left: 4px solid #2563eb;">
        <strong>📌 Hướng dẫn cho bé:</strong> Em hãy đọc kỹ câu mô tả bên trái và nối nét ✏️ sang con vật đúng bên phải.
      </div>

      <!-- Matching Grid -->
      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${pack.ro1.map(item => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px; border: 1px solid #cbd5e1; border-radius: 12px; background: #f8fafc;">
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; flex: 1;">
              ${item.desc}
            </div>
            <div style="font-size: 24px; padding: 0 16px; color: #2563eb;">➔</div>
            <div style="display: flex; align-items: center; gap: 8px; background: white; padding: 8px 16px; border: 2px solid #93c5fd; border-radius: 8px; min-width: 150px;">
              <span style="font-size: 32px;">${item.emoji}</span>
              <span style="font-weight: 800; color: #1e293b;">${item.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PAGE BREAK BEFORE WORKSHEET 2 -->
    <div class="page-break-before"></div>

    <!-- RỔ 2 WORKSHEET (LỚP 1): TOÁN CỘNG TRỪ 10, SO SÁNH & QUY LUẬT -->
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #f59e0b; border-radius: 16px; padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f59e0b; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #f59e0b; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 2 — ${pack.dayLabel} (Tuần ${weekNum})</span>
          <h2 style="margin: 6px 0 0 0; color: #b45309; font-size: 20px;">🔢 TOÁN LỚP 1: CỘNG TRỪ PHẠM VI 10 & TOÁN CÓ LỜI VĂN</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">
          Đạt 10/10 ➔ Nhận 1 Sticker 🌟
        </div>
      </div>

      <!-- Part A: Addition & Subtraction -->
      <div style="margin-bottom: 20px;">
        <div style="font-size: 14px; font-weight: 800; color: #b45309; margin-bottom: 10px;">
          PHẦN 1: TÍNH KẾT QUẢ CÁC PHÉP TÍNH (CỘNG & TRỪ):
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
          ${mathEqs.map(eq => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 18px; border: 1px solid #cbd5e1; border-radius: 10px; background: #fafafa;">
              <span style="font-size: 18px; font-weight: 800; color: #1e293b;">${eq.text}</span>
              <div style="width: 48px; height: 48px; border: 2px solid #f59e0b; border-radius: 6px; background: white; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: #b45309;"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Part B: Compare Numbers -->
      <div style="margin-bottom: 20px;">
        <div style="font-size: 14px; font-weight: 800; color: #b45309; margin-bottom: 10px;">
          PHẦN 2: ĐIỀN DẤU THÍCH HỢP ( > , < , = ) VÀO Ô TRÒN:
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; text-align: center;">
          ${mathComp.map(comp => `
            <div style="background: #fffbeb; padding: 10px; border-radius: 10px; border: 1px solid #fde68a; font-size: 18px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>${comp.a}</span>
              <div style="width: 36px; height: 36px; border: 2px solid #f59e0b; border-radius: 50%; background: white;"></div>
              <span>${comp.b}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Part C: Story Word Problem -->
      <div style="padding: 16px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 800; color: #92400e; margin-bottom: 8px;">
          PHẦN 3: BÀI TOÁN CÓ LỜI VĂN NGẮN:
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 12px; line-height: 1.6;">
          ${storyProblem}
        </div>
        <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; font-weight: 800;">
          <span>Phép tính:</span>
          <div style="border-bottom: 2px solid #b45309; flex: 1; height: 32px;"></div>
        </div>
      </div>

      <!-- Part D: Number Pattern -->
      <div style="padding: 14px; background: #fafafa; border-radius: 12px; border: 1px solid #e2e8f0;">
        <div style="font-size: 14px; font-weight: 800; color: #475569; margin-bottom: 8px;">
          PHẦN 4: ĐIỀN SỐ CÒN THIẾU THEO QUY LUẬT DÃY SỐ:
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${mathSeq.map(seq => `
            <div style="font-size: 16px; font-weight: 800; color: #1e293b; background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1;">
              ${seq}
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- PAGE BREAK BEFORE WORKSHEET 3 -->
    <div class="page-break-before"></div>

    <!-- RỔ 3 WORKSHEET (LỚP 1): ĐỌC HIỂU ĐOẠN VĂN & TRẢ LỜI CÂU HỎI -->
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #8b5cf6; border-radius: 16px; padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #8b5cf6; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #8b5cf6; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 3 — ${pack.dayLabel} (Tuần ${weekNum})</span>
          <h2 style="margin: 6px 0 0 0; color: #5b21b6; font-size: 20px;">📖 ĐỌC HIỂU ĐOẠN VĂN & KHOANH CÂU TRẢ LỜI ĐÚNG</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">
          Hoàn thành ➔ Thả Hộp XONG 🎉
        </div>
      </div>

      <!-- Paragraph Passage -->
      <div style="background: #f5f3ff; border: 2px solid #ddd6fe; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <div style="font-size: 13px; font-weight: 800; color: #6d28d9; text-transform: uppercase; margin-bottom: 6px;">
          📜 ĐOẠN VĂN ĐỌC HIỂU HÔM NAY:
        </div>
        <p style="font-size: 16px; line-height: 1.8; font-weight: 600; color: #1e1b4b; margin: 0;">
          "${pack.passage}"
        </p>
      </div>

      <!-- Comprehension Questions -->
      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;">
        
        <!-- Q1 -->
        <div style="background: #fafafa; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px;">
          <div style="font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 8px;">
            ${pack.q1.text}
          </div>
          <div style="display: flex; gap: 24px; font-size: 15px; font-weight: 700; color: #475569;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${pack.q1.optA}
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${pack.q1.optB}
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div style="background: #fafafa; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px;">
          <div style="font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 8px;">
            ${pack.q2.text}
          </div>
          <div style="display: flex; gap: 24px; font-size: 15px; font-weight: 700; color: #475569;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${pack.q2.optA}
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${pack.q2.optB}
            </label>
          </div>
        </div>

      </div>

      <!-- Sentence Completion Exercise -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; padding: 16px;">
        <div style="font-size: 14px; font-weight: 800; color: #5b21b6; margin-bottom: 8px;">
          ✏️ BÀI TẬP GHÉP TỪ THÀNH CÂU HOÀN CHỈNH:
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #334155; margin-bottom: 8px;">
          Từ gợi ý: <span style="background: #ddd6fe; color: #5b21b6; padding: 2px 8px; border-radius: 4px;">${pack.wordHint}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 700; color: #0f172a;">
          <span>Viết lại câu hoàn chỉnh:</span>
          <div style="border-bottom: 2px solid #5b21b6; flex: 1; height: 32px;"></div>
        </div>
      </div>

    </div>
  `;
}

// --------------------------------------------
// MỨC 3: LỚP 1 NÂNG CAO (Toán phạm vi 20)
// --------------------------------------------
function renderLevel3Adv(dayKey = 'mon', randomSeed = 0, weekNum = '1') {
  const pack = DYNAMIC_DAY_PACKS[dayKey] || DYNAMIC_DAY_PACKS.mon;
  
  const advMathEqs = [];
  for (let i = 0; i < 6; i++) {
    const seed = randomSeed * 12 + i + 10;
    const isAdd = (seed % 2 === 0);
    if (isAdd) {
      const a = getRandomInt(8, 14, seed);
      const b = getRandomInt(2, 6, seed + 1);
      advMathEqs.push({ text: `${a} + ${b} = `, ans: (a + b).toString() });
    } else {
      const b = getRandomInt(2, 6, seed);
      const sum = getRandomInt(12, 20, seed + 2);
      advMathEqs.push({ text: `${sum} - ${b} = `, ans: (sum - b).toString() });
    }
  }

  return `
    <div class="page-break-before"></div>
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #7c3aed; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #7c3aed; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #7c3aed; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 1 — ${pack.dayLabel} (Tuần ${weekNum} - NÂNG CAO)</span>
          <h2 style="margin: 6px 0 0 0; color: #5b21b6; font-size: 20px;">🧩 TÌM TỪ KHÁC LOẠI & PHÂN LOẠI</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">Mức 3 — Thử thách</div>
      </div>
      <div style="font-size: 14px; font-weight: 700; color: #4c1d95; background: #f5f3ff; padding: 12px; border-radius: 8px; margin-bottom: 16px;">
        📌 Khoanh tròn từ KHÔNG CÙNG LOẠI trong mỗi nhóm sau:
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 16px; font-weight: 800;">
        <div style="background: #fafafa; padding: 12px 18px; border-radius: 8px; border: 1px solid #ddd;">
          1)  ${pack.ro1[0].name}   ·   ${pack.ro1[1].name}   ·   ${pack.ro1[2].name}   ·   <span style="color: #dc2626; border: 2px dashed #dc2626; padding: 2px 6px; border-radius: 4px;">Máy bay</span>
        </div>
        <div style="background: #fafafa; padding: 12px 18px; border-radius: 8px; border: 1px solid #ddd;">
          2)  ${pack.ro1[3].name}   ·   Cá heo   ·   <span style="color: #dc2626; border: 2px dashed #dc2626; padding: 2px 6px; border-radius: 4px;">Con mèo</span>   ·   Rùa biển
        </div>
      </div>
    </div>

    <div class="page-break-before"></div>
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #059669; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #059669; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #059669; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 2 — ${pack.dayLabel} (Tuần ${weekNum} - NÂNG CAO)</span>
          <h2 style="margin: 6px 0 0 0; color: #047857; font-size: 20px;">🔢 TOÁN PHẠM VI 20 (NÂNG CAO)</h2>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; font-size: 18px; font-weight: 800;">
        ${advMathEqs.map(eq => `
          <div style="background: #ecfdf5; padding: 14px; border-radius: 10px; border: 1px solid #a7f3d0; display: flex; justify-content: space-between; align-items: center;">
            <span>${eq.text}</span>
            <div style="width: 50px; height: 50px; border: 2px solid #059669; background: white; border-radius: 8px;"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --------------------------------------------
// MỨC 1: KHỞI ĐỘNG (Dễ)
// --------------------------------------------
function renderLevel1Easy() {
  return `
    <div class="page-break-before"></div>
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 2px solid #3b82f6; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #3b82f6; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #3b82f6; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 1 — KHỞI ĐỘNG</span>
          <h2 style="margin: 6px 0 0 0; color: #1e3a8a; font-size: 20px;">🧩 THẺ GHÉP ĐÔI HÌNH ĐỘNG VẬT</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">✂️ Cắt cho vào rổ 1</div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <div style="border: 2px dashed #94a3b8; border-radius: 12px; padding: 16px; text-align: center; background: #fafafa;">
          <div style="font-size: 48px;">🦁</div>
          <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">SƯ TỬ</div>
        </div>
        <div style="border: 2px dashed #94a3b8; border-radius: 12px; padding: 16px; text-align: center; background: #fafafa;">
          <div style="font-size: 48px;">🦁</div>
          <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">SƯ TỬ</div>
        </div>
        <div style="border: 2px dashed #94a3b8; border-radius: 12px; padding: 16px; text-align: center; background: #fafafa;">
          <div style="font-size: 48px;">🐘</div>
          <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">CON VOI</div>
        </div>
        <div style="border: 2px dashed #94a3b8; border-radius: 12px; padding: 16px; text-align: center; background: #fafafa;">
          <div style="font-size: 48px;">🐘</div>
          <div style="font-size: 16px; font-weight: 800; margin-top: 4px;">CON VOI</div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// AI-POWERED TODAY WORKSHEETS GENERATOR
// ============================================
// ============================================
// AI-POWERED TODAY WORKSHEETS GENERATOR
// ============================================
export function renderTodayAI() {
  const todayStr = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <div class="fade-in">
      <!-- Screen Only Top Header -->
      <div class="section-header no-print">
        <div class="section-badge green">🤖 Sinh đề tự động bằng AI</div>
        <h1 class="section-title">Hôm nay học gì AI ⚡</h1>
        <p class="section-subtitle">
          Nhập chủ đề hoặc câu lệnh ý tưởng của Ba ➔ Trình AI sẽ <strong>tạo mới 100% cả 3 rổ bài tập</strong> 
          (Rổ 1 Đọc hiểu mô tả, Rổ 2 Toán & Bài toán lời văn, Rổ 3 Đoạn văn đọc hiểu) chuẩn in A4 cho máy in Brother HL-L3280CDW.
        </p>
      </div>

      <!-- Action & Control Bar -->
      <div class="print-action-bar no-print" style="background: var(--bg-card); border: 2px solid #10b981; border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-8); box-shadow: var(--shadow-md);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; border-bottom: 1px dashed var(--border-color); padding-bottom: 16px;">
          <div>
            <div style="font-size: var(--text-lg); font-weight: 800; color: #10b981; display: flex; align-items: center; gap: 8px;">
              <span>🤖 Trình Tạo Bài Tập Google Gemini AI (Chính Thức)</span>
              <span style="background: #10b981; color: white; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: 700;">REAL AI LLM CALL</span>
            </div>
            <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 4px;">
              Gửi trực tiếp System Prompt tới AI Model ➔ Nhận phản hồi JSON cấu trúc ➔ Xuất file in A4 Brother HL-L3280CDW.
            </div>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="btn-print-all-ai" class="btn btn-primary" style="background: linear-gradient(135deg, #10b981, #059669); font-weight: 700; gap: 6px;">
              🖨️ In Tất Cả Bài AI (A4)
            </button>
            <button id="btn-print-schedule-ai" class="btn btn-secondary" style="font-weight: 600;">
              📋 In Bảng Lịch Trình
            </button>
            <button id="btn-print-worksheets-ai" class="btn btn-secondary" style="font-weight: 600;">
              📝 Chỉ In 3 Rổ Bài Tập
            </button>
          </div>
        </div>

        <!-- Gemini API Key Bar -->
        <div style="margin-top: 16px; background: rgba(16, 185, 129, 0.06); padding: 14px; border-radius: 10px; border: 1px solid #a7f3d0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 6px;">
            <label style="font-weight: 800; font-size: 13px; color: #047857; display: flex; align-items: center; gap: 6px;">
              <span>🔑 Google Gemini API Key:</span>
            </label>
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="font-size: 12px; font-weight: 700; color: #2563eb; text-decoration: underline;">
              👉 Bấm vào đây để lấy API Key miễn phí từ Google AI Studio (10 giây)
            </a>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <input type="password" id="ai-api-key-input" placeholder="Dán Gemini API Key của Ba vào đây (VD: AIzaSy...)" style="flex: 1; padding: 8px 12px; border-radius: 6px; border: 1px solid #10b981; font-size: 13px; background: var(--bg-primary); color: var(--text-primary); font-family: monospace;" />
            <button id="btn-save-api-key" class="btn btn-secondary" style="padding: 8px 14px; font-size: 12px; font-weight: 700; background: #10b981; color: white;">
              Lưu Key 💾
            </button>
          </div>
        </div>

        <!-- AI Input Form Controls -->
        <div style="margin-top: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; align-items: flex-end;">
          <div>
            <label style="font-weight: 700; font-size: 13px; color: var(--text-primary); display: block; margin-bottom: 6px;">🤖 Chọn AI Model:</label>
            <select id="ai-model-select" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); font-weight: 700; background: var(--bg-primary); color: var(--text-primary);">
              <option value="auto" selected>⚡ Tự động tìm Model (Gemini 3.5 / 3.7 Flash)</option>
              <option value="gemini-3.5-flash">🚀 Gemini 3.5 Flash (Khuyên dùng - Đã verified 100%)</option>
              <option value="gemini-3.7-flash">🌟 Gemini 3.7 Flash</option>
              <option value="gemini-flash-latest">⚡ Gemini Flash Latest</option>
              <option value="gemini-3.8-flash">🧠 Gemini 3.8 Flash</option>
            </select>
          </div>

          <div>
            <label style="font-weight: 700; font-size: 13px; color: var(--text-primary); display: block; margin-bottom: 6px;">🎯 Chọn Chủ Đề Yêu Thích:</label>
            <select id="ai-theme-select" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); font-weight: 700; background: var(--bg-primary); color: var(--text-primary);">
              <option value="dino">🦖 Thế giới Khủng Long ăn cỏ & dũng mãnh</option>
              <option value="space">🚀 Vũ trụ bao la & Tàu vũ trụ</option>
              <option value="dog" selected>🐕 Chú Chó Vàng Lô Lô & Thú cưng</option>
              <option value="zoo">🦁 Sở thú Rừng Xanh & Sư tử, Voi</option>
              <option value="ocean">🐬 Sinh vật biển Cá heo & Đại dương</option>
              <option value="farm">🐰 Thỏ Trắng & Cà rốt Nông trại</option>
              <option value="music">🎵 Âm nhạc & Đồ chơi phát sáng</option>
            </select>
          </div>

          <div>
            <label style="font-weight: 700; font-size: 13px; color: var(--text-primary); display: block; margin-bottom: 6px;">📊 Trình Độ Học Vấn:</label>
            <select id="ai-level-select" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); font-weight: 700; background: var(--bg-primary); color: var(--text-primary);">
              <option value="easy">🌱 Mức 1: Khởi động (Đồ nét + Số 1-5)</option>
              <option value="grade1-std" selected>🎓 Mức 2: Chuẩn Lớp 1 (Đọc hiểu & Toán cộng/trừ 10)</option>
              <option value="grade1-adv">🚀 Mức 3: Lớp 1 Nâng cao (Toán 20 & Đọc đoạn văn)</option>
            </select>
          </div>

          <div>
            <label style="font-weight: 700; font-size: 13px; color: var(--text-primary); display: block; margin-bottom: 6px;">📆 Tuần Can Thiệp:</label>
            <select id="ai-week-select" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); font-weight: 700; background: var(--bg-primary); color: var(--text-primary);">
              <option value="1">Tuần 1 (Tập trung 5-7 phút)</option>
              <option value="2" selected>Tuần 2 (Tập trung 7-10 phút)</option>
              <option value="3">Tuần 3 (Tập trung 10-15 phút)</option>
              <option value="4">Tuần 4 (Độc lập 15-20+ phút 🎉)</option>
            </select>
          </div>
        </div>

        <!-- Custom Prompt Textarea -->
        <div style="margin-top: 14px;">
          <label style="font-weight: 700; font-size: 13px; color: var(--text-primary); display: block; margin-bottom: 6px;">💬 Yêu Cầu / Câu Lệnh Ý Tưởng Cho AI (Tùy Chọn):</label>
          <textarea id="ai-custom-prompt" placeholder="Ví dụ: Tạo bài toán về 3 chú khủng long ăn cỏ, văn bản đọc hiểu nhẹ nhàng truyền cảm hứng..." style="width: 100%; height: 60px; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); font-size: 13px; background: var(--bg-primary); color: var(--text-primary); font-family: inherit; resize: vertical;"></textarea>
        </div>

        <!-- Submit Button & Live Status -->
        <div style="margin-top: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
          <button id="btn-generate-ai" class="btn btn-primary" style="background: linear-gradient(135deg, #10b981, #047857); padding: 12px 24px; font-size: 14px; font-weight: 800; border-radius: 10px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4); gap: 8px;">
            ⚡ GỬI LỆNH TỚI GOOGLE GEMINI AI MODEL
          </button>

          <div id="ai-status-badge" style="font-size: 13px; font-weight: 700; color: #047857; background: #d1fae5; padding: 6px 14px; border-radius: 20px; border: 1px solid #6ee7b7;">
            ⚪ Sẵn sàng gửi lệnh tới AI
          </div>
        </div>

        <!-- System Prompt & JSON Inspector -->
        <details style="margin-top: 20px; background: #0f172a; color: #38bdf8; border-radius: 12px; padding: 14px; border: 1px solid #1e293b;">
          <summary style="cursor: pointer; font-weight: 800; font-size: 13px; outline: none; user-select: none;">
            🔍 Soi Chi Tiết System Prompt & JSON Thực Tế Do Gemini AI Trả Về (Bấm để xem)
          </summary>
          <div style="margin-top: 12px; font-size: 12px; color: #cbd5e1;">
            <div style="font-weight: 700; color: #a7f3d0; margin-bottom: 4px;">1. System Prompt đã tạo & gửi đi:</div>
            <pre id="ai-inspector-prompt" style="background: #1e293b; color: #a7f3d0; padding: 12px; border-radius: 8px; font-size: 11px; white-space: pre-wrap; font-family: monospace; max-height: 200px; overflow-y: auto; margin-bottom: 12px;">(Bấm nút 'GỬI LỆNH TỚI GOOGLE GEMINI AI MODEL' để xem System Prompt...)</pre>

            <div style="font-weight: 700; color: #fef08a; margin-bottom: 4px;">2. Raw JSON thực tế do Gemini AI phản hồi:</div>
            <pre id="ai-inspector-response" style="background: #1e293b; color: #fef08a; padding: 12px; border-radius: 8px; font-size: 11px; white-space: pre-wrap; font-family: monospace; max-height: 250px; overflow-y: auto;">(Chưa gọi API... Dữ liệu phản hồi thực tế sẽ xuất hiện tại đây)</pre>
          </div>
        </details>
      </div>

      <!-- Worksheets Container -->
      <div id="printable-ai-worksheets">
        ${generateAIWorksheetsHTML()}
      </div>
    </div>
  `;
}

// --------------------------------------------
// Real Gemini AI API Execution Function
// --------------------------------------------
export async function callGeminiAPI(apiKey, customPrompt = '', themeKey = 'dog', level = 'grade1-std', weekNum = '2', modelChoice = 'auto') {
  const AI_THEME_NAMES = {
    dino: 'Thế giới Khủng long ăn cỏ & dũng mãnh 🦖',
    space: 'Vũ trụ bao la & Tàu vũ trụ 🚀',
    dog: 'Chú Chó Vàng Lô Lô & Thú cưng 🐕',
    zoo: 'Sở thú Rừng Xanh & Sư tử, Voi 🦁',
    ocean: 'Sinh vật biển Cá heo & Đại dương 🐬',
    farm: 'Thỏ Trắng & Cà rốt Nông trại 🐰',
    music: 'Âm nhạc & Đồ chơi phát sáng 🎵'
  };

  const themeName = AI_THEME_NAMES[themeKey] || 'Chú Chó Vàng Lô Lô 🐕';
  const levelName = level === 'grade1-adv' ? 'Mức 3: Lớp 1 Nâng cao' : level === 'easy' ? 'Mức 1: Khởi động' : 'Mức 2: Chuẩn Lớp 1';

  const systemPrompt = `Bạn là Chuyên gia Can thiệp Tự kỷ (BCBA & TEACCH) và Giáo viên Tiểu học Lớp 1 Việt Nam.
Hãy sáng tạo 1 bộ bài tập 3 rổ TEACCH chất lượng cao dành cho bé 6 tuổi tự kỷ đang học Lớp 1.
CẤU TRÚC CAN THIỆP:
- Chủ đề: "${themeName}"
- Mức độ học vấn: "${levelName}"
- Tuần can thiệp: Tuần ${weekNum} (Thời gian tập trung: 7-10 phút)
- Câu lệnh/Ý tưởng riêng từ Ba: "${customPrompt || 'Tạo bài tập sinh động, giúp bé tập trung và hứng thú'}"

YÊU CẦU ĐỊNH DẠNG:
Bạn PHẢI trả về đúng 1 chuỗi JSON thuần túy (KHÔNG chứa markdown triple backticks \`\`\`json, không kèm bất kỳ câu dẫn nào khác):
{
  "title": "Tên bài tập do AI sáng tạo",
  "ro1": [
    { "desc": "1. Mô tả chi tiết con vật/đồ vật thứ nhất...", "emoji": "🦁", "name": "SƯ TỬ" },
    { "desc": "2. Mô tả chi tiết con vật/đồ vật thứ hai...", "emoji": "🐘", "name": "CON VOI" },
    { "desc": "3. Mô tả chi tiết con vật/đồ vật thứ ba...", "emoji": "🦒", "name": "HƯƠU CAO CỔ" },
    { "desc": "4. Mô tả chi tiết con vật/đồ vật thứ tư...", "emoji": "🐧", "name": "CHIM CÁNH CỤT" }
  ],
  "ro2_math": [
    { "text": "5 + 3 = ", "ans": "8" },
    { "text": "9 - 4 = ", "ans": "5" },
    { "text": "6 + 2 = ", "ans": "8" },
    { "text": "10 - 7 = ", "ans": "3" },
    { "text": "4 + 4 = ", "ans": "8" },
    { "text": "8 - 3 = ", "ans": "5" }
  ],
  "ro2_comp": [
    { "a": 8, "b": 5 },
    { "a": 4, "b": 9 },
    { "a": 7, "b": 7 },
    { "a": 3, "b": 6 }
  ],
  "ro2_story": "Bài toán có lời văn ngắn gọn 1-2 câu về nhân vật trong chủ đề...",
  "ro2_seq": [
    "a) 2 ,  4 ,  6 ,  [ ____ ] ,  10",
    "b) 10 ,  8 ,  6 ,  [ ____ ] ,  2"
  ],
  "ro3_passage": "Đoạn văn đọc hiểu 3-4 câu ngắn gọn, nhẹ nhàng, sinh động về chủ đề...",
  "ro3_q1": { "text": "1. Câu hỏi đọc hiểu 1?", "optA": "A. Lựa chọn 1", "optB": "B. Lựa chọn 2" },
  "ro3_q2": { "text": "2. Câu hỏi đọc hiểu 2?", "optA": "A. Lựa chọn 2", "optB": "B. Lựa chọn 2" },
  "ro3_word_hint": "[ Từ gợi ý 1 ] [ Từ gợi ý 2 ]"
}`;

  const keyToUse = apiKey || import.meta.env.VITE_GEMINI_API_KEY || '';
  if (!keyToUse) {
    throw new Error('Chưa có Gemini API Key. Ba vui lòng dán Gemini API Key vào ô trên hoặc lưu key để gọi AI thực tế.');
  }

  // Multi-model fallback sequence (includes 503 high demand auto-fallback)
  const candidateModels = (modelChoice && modelChoice !== 'auto')
    ? [modelChoice]
    : ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-flash-latest', 'gemini-3.8-flash'];

  let lastErr = null;
  for (const modelName of candidateModels) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${keyToUse}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }]
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        if ((response.status === 404 || response.status === 400 || response.status === 503) && candidateModels.length > 1) {
          console.warn(`Model ${modelName} returned status ${response.status} (high demand/unsupported), trying next fallback model...`);
          lastErr = new Error(`Model ${modelName} (${response.status}): ${errText}`);
          continue;
        }
        throw new Error(`Lỗi từ Gemini AI API (${response.status}) [${modelName}]: ${errText}`);
      }

      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const cleanJsonStr = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
      
      const parsed = JSON.parse(cleanJsonStr);
      return { parsed, rawText, systemPrompt, usedModel: modelName };
    } catch (err) {
      if (candidateModels.length > 1 && (err.message.includes('404') || err.message.includes('400'))) {
        lastErr = err;
        continue;
      }
      throw err;
    }
  }

  throw lastErr || new Error('Không thể kết nối tới bất kỳ model Gemini nào. Vui lòng kiểm tra lại API Key.');
}

// --------------------------------------------
// AI Worksheets Renderer Engine
// --------------------------------------------
export function generateAIWorksheetsHTML(customPrompt = '', themeKey = 'dog', level = 'grade1-std', seed = 1234, weekNum = '2', aiData = null) {
  const nowTime = new Date().toLocaleTimeString('vi-VN');

  // Base fallback themes if AI data not fetched yet
  const AI_THEMES = {
    dino: {
      title: 'Thế Giới Khủng Long 🦖',
      ro1: [
        { desc: '1. "Loài khủng long cổ dài ăn lá cây trên đỉnh ngọn núi"', emoji: '🦕', name: 'KHỦNG LONG CỔ DÀI' },
        { desc: '2. "Chúa tể khủng long bạo chúa với hàm răng sắc nhọn"', emoji: '🦖', name: 'KHỦNG LONG BẠO CHÚA' },
        { desc: '3. "Có 3 chiếc sừng nhọn trên đầu để bảo vệ bản thân"', emoji: '🦏', name: 'KHỦNG LONG 3 SỪNG' },
        { desc: '4. "Biết bay trên bầu trời cao với đôi cánh rộng lớn"', emoji: '🦅', name: 'KHỦNG LONG CÁNH' }
      ],
      passage: 'Chú khủng long nhỏ Tino sống trong khu rừng xanh ngát thời cổ đại. Tino rất thích ăn lá cây non ngọt ngào. Mỗi ngày, Tino cùng các bạn khủng long cổ dài chạy tung tăng chơi trốn tìm dưới ánh nắng ấm áp.',
      q1: { text: '1. Chú khủng long Tino thích ăn gì nhất?', optA: 'A. Lá cây non ngọt ngào', optB: 'B. Cá biển nướng' },
      q2: { text: '2. Tino cùng các bạn chơi trò chơi gì?', optA: 'A. Chơi trốn tìm', optB: 'B. Đá bóng trên cỏ' },
      wordHint: '[ Khủng long Tino ] [ ăn lá cây non ]',
      story: (n1, n2) => `🦖 Trong rừng cổ đại có ${n1} con khủng long ăn cỏ, có thêm ${n2} con khủng long nhỏ chạy tới gia nhập. Hỏi có tất cả bao nhiêu con khủng long?`
    },
    dog: {
      title: 'Chú Chó Vàng Lô Lô 🐕',
      ro1: [
        { desc: '1. "Bộ lông vàng óng, ngoan ngoãn biết trông nhà và sủa gâu gâu"', emoji: '🐕', name: 'CHÓ LÔ LÔ' },
        { desc: '2. "Đôi mắt tròn xoe, thích leo trèo và bắt chuột meo meo"', emoji: '🐱', name: 'CON MÈO MÙI' },
        { desc: '3. "Đôi tai dài mềm mại, nhảy nhanh thích ăn cà rốt"', emoji: '🐰', name: 'THỎ TRẮNG' },
        { desc: '4. "Bơi lội dưới ao sân nhà, kêu quạc quạc có màng chân"', emoji: '🦆', name: 'CON VỊT VÀNG' }
      ],
      passage: 'Chú chó Lô Lô là bạn thân thiết nhất của bé. Lô Lô có chiếc đuôi xinh luôn vẫy tít mỗi khi bé đi học về. Chiều nào bé và Lô Lô cũng ra khoảng sân xanh mát chạy bắt bóng xốp rất vui vẻ.',
      q1: { text: '1. Lô Lô vẫy đuôi khi nào?', optA: 'A. Khi bé đi học về', optB: 'B. Khi trời mưa to' },
      q2: { text: '2. Chiều nào bé và Lô Lô làm gì ngoài sân?', optA: 'A. Chơi chạy bắt bóng xốp', optB: 'B. Nằm ngủ cả chiều' },
      wordHint: '[ Chú chó Lô Lô ] [ chơi bắt bóng ]',
      story: (n1, n2) => `🐕 Trong sân có ${n1} chú chó Lô Lô đang đùa vui, bé mang ra thêm ${n2} quả bóng xốp. Hỏi bé và chú chó có tổng cộng bao nhiêu đồ chơi bóng?`
    }
  };

  const baseTheme = AI_THEMES[themeKey] || AI_THEMES.dog;

  // Use Real AI Data if available
  const titleDisplay = aiData?.title || (customPrompt ? `Prompt AI: "${customPrompt.slice(0, 30)}..."` : baseTheme.title);
  const ro1List = aiData?.ro1 || baseTheme.ro1;
  const mathEqs = aiData?.ro2_math || [
    { text: '5 + 3 = ', ans: '8' }, { text: '9 - 4 = ', ans: '5' },
    { text: '6 + 2 = ', ans: '8' }, { text: '10 - 7 = ', ans: '3' },
    { text: '4 + 4 = ', ans: '8' }, { text: '8 - 3 = ', ans: '5' }
  ];
  const mathComp = aiData?.ro2_comp || [{ a: 8, b: 5 }, { a: 4, b: 9 }, { a: 7, b: 7 }, { a: 3, b: 6 }];
  const storyText = aiData?.ro2_story || baseTheme.story(5, 3);
  const seqArr = aiData?.ro2_seq || ["a) 2 ,  4 ,  6 ,  [ ____ ] ,  10", "b) 10 ,  8 ,  6 ,  [ ____ ] ,  2"];
  const passageText = aiData?.ro3_passage || baseTheme.passage;
  const q1Obj = aiData?.ro3_q1 || baseTheme.q1;
  const q2Obj = aiData?.ro3_q2 || baseTheme.q2;
  const wordHintText = aiData?.ro3_word_hint || baseTheme.wordHint;
  const isRealAI = Boolean(aiData);

  return `
    <!-- LIVE GENERATION BANNER -->
    <div class="no-print" style="background: ${isRealAI ? 'linear-gradient(135deg, #059669, #047857)' : 'linear-gradient(135deg, #10b981, #059669)'}; color: white; padding: 14px 22px; border-radius: 12px; font-weight: 800; font-size: 15px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">${isRealAI ? '🤖✨' : '🤖⚡'}</span>
        <div>
          <div style="font-size: 16px;">${isRealAI ? 'BÀI TẬP ĐƯỢC TẠO TRỰC TIẾP TỪ GOOGLE GEMINI AI MODEL!' : 'BỘ BÀI TẬP AI ĐÃ ĐƯỢC SẠO THẢO!'}</div>
          <div style="font-size: 12px; opacity: 0.95; font-weight: 600;">${isRealAI ? '🟢 Live Gemini AI Data Verified' : 'Chủ đề: ' + titleDisplay}</div>
        </div>
      </div>
      <div style="text-align: right; font-size: 13px; opacity: 0.95; font-family: monospace;">
        🕒 Sinh lúc: ${nowTime}<br>
        Mã đề: #AI-${seed}
      </div>
    </div>

    <!-- PAGE BREAK BEFORE WORKSHEET 1 -->
    <div class="page-break-before"></div>

    <!-- RỔ 1 WORKSHEET AI: ĐỌC CÂU MÔ TẢ & NỐI NÉT -->
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #2563eb; border-radius: 16px; padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #2563eb; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 1 — ${titleDisplay} (Tuần ${weekNum})</span>
          <h2 style="margin: 6px 0 0 0; color: #1e40af; font-size: 20px;">📖 AI ĐỌC MÔ TẢ & NỐI NÉT ✏️ VỚI HÌNH ĐÚNG</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">
          Mã đề: #AI-R1-${seed}
        </div>
      </div>

      <div style="font-size: 13px; color: #1e40af; margin-bottom: 20px; background: #eff6ff; padding: 10px 14px; border-radius: 8px; border-left: 4px solid #2563eb;">
        <strong>📌 Hướng dẫn cho bé:</strong> Em hãy đọc kỹ câu mô tả do AI viết bên trái và nối nét ✏️ sang hình đúng bên phải.
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${ro1List.map(item => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px; border: 1px solid #cbd5e1; border-radius: 12px; background: #f8fafc;">
            <div style="font-size: 15px; font-weight: 700; color: #0f172a; flex: 1;">
              ${item.desc}
            </div>
            <div style="font-size: 24px; padding: 0 16px; color: #2563eb;">➔</div>
            <div style="display: flex; align-items: center; gap: 8px; background: white; padding: 8px 16px; border: 2px solid #93c5fd; border-radius: 8px; min-width: 170px;">
              <span style="font-size: 28px;">${(item.emoji || '⭐').split(' ')[0]}</span>
              <span style="font-weight: 800; color: #1e293b; font-size: 14px;">${item.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PAGE BREAK BEFORE WORKSHEET 2 -->
    <div class="page-break-before"></div>

    <!-- RỔ 2 WORKSHEET AI: TOÁN LỚP 1 & BÀI TOÁN LỜI VĂN AI -->
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #f59e0b; border-radius: 16px; padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f59e0b; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #f59e0b; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 2 — ${titleDisplay} (Tuần ${weekNum})</span>
          <h2 style="margin: 6px 0 0 0; color: #b45309; font-size: 20px;">🔢 AI TOÁN LỚP 1: CỘNG TRỪ & BÀI TOÁN LỜI VĂN</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">
          Đạt 10/10 ➔ Nhận 1 Sticker 🌟
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="font-size: 14px; font-weight: 800; color: #b45309; margin-bottom: 10px;">
          PHẦN 1: TÍNH KẾT QUẢ CÁC PHÉP TÍNH (CỘNG & TRỪ):
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
          ${mathEqs.map(eq => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 18px; border: 1px solid #cbd5e1; border-radius: 10px; background: #fafafa;">
              <span style="font-size: 18px; font-weight: 800; color: #1e293b;">${eq.text}</span>
              <div style="width: 48px; height: 48px; border: 2px solid #f59e0b; border-radius: 6px; background: white; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: #b45309;"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="font-size: 14px; font-weight: 800; color: #b45309; margin-bottom: 10px;">
          PHẦN 2: ĐIỀN DẤU THÍCH HỢP ( > , < , = ) VÀO Ô TRÒN:
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; text-align: center;">
          ${mathComp.map(comp => `
            <div style="background: #fffbeb; padding: 10px; border-radius: 10px; border: 1px solid #fde68a; font-size: 18px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>${comp.a}</span>
              <div style="width: 36px; height: 36px; border: 2px solid #f59e0b; border-radius: 50%; background: white;"></div>
              <span>${comp.b}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- AI Word Problem -->
      <div style="padding: 16px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 800; color: #92400e; margin-bottom: 8px;">
          PHẦN 3: BÀI TOÁN CÓ LỜI VĂN DO AI VIẾT TỰ ĐỘNG:
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 12px; line-height: 1.6;">
          "${storyText}"
        </div>
        <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; font-weight: 800;">
          <span>Phép tính của bé:</span>
          <div style="border-bottom: 2px solid #b45309; flex: 1; height: 32px;"></div>
        </div>
      </div>

      <div style="padding: 14px; background: #fafafa; border-radius: 12px; border: 1px solid #e2e8f0;">
        <div style="font-size: 14px; font-weight: 800; color: #475569; margin-bottom: 8px;">
          PHẦN 4: ĐIỀN SỐ CÒN THIẾU THEO QUY LUẬT DÃY SỐ:
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${seqArr.map(seq => `
            <div style="font-size: 16px; font-weight: 800; color: #1e293b; background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1;">
              ${seq}
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- PAGE BREAK BEFORE WORKSHEET 3 -->
    <div class="page-break-before"></div>

    <!-- RỔ 3 WORKSHEET AI: ĐỌC HIỂU ĐOẠN VĂN & KHOANH TRẮC NGHIỆM AI -->
    <div class="content-block worksheet-card" style="background: white; color: #1e293b; border: 3px solid #8b5cf6; border-radius: 16px; padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #8b5cf6; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span style="background: #8b5cf6; color: white; font-weight: 800; padding: 4px 12px; border-radius: 6px; font-size: 14px;">BÀI TẬP RỔ 3 — ${titleDisplay} (Tuần ${weekNum})</span>
          <h2 style="margin: 6px 0 0 0; color: #5b21b6; font-size: 20px;">📖 AI ĐỌC HIỂU ĐOẠN VĂN & KHOANH CÂU TRẢ LỜI ĐÚNG</h2>
        </div>
        <div style="text-align: right; font-size: 12px; color: #64748b;">
          Mã đề: #AI-R3-${seed}
        </div>
      </div>

      <div style="background: #f5f3ff; border: 2px solid #ddd6fe; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <div style="font-size: 13px; font-weight: 800; color: #6d28d9; text-transform: uppercase; margin-bottom: 6px;">
          📜 ĐOẠN VĂN ĐỌC HIỂU DO AI SOẠN THẢO TỰ ĐỘNG:
        </div>
        <p style="font-size: 16px; line-height: 1.8; font-weight: 600; color: #1e1b4b; margin: 0;">
          "${passageText}"
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;">
        <div style="background: #fafafa; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px;">
          <div style="font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 8px;">
            ${q1Obj.text}
          </div>
          <div style="display: flex; gap: 24px; font-size: 15px; font-weight: 700; color: #475569;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${q1Obj.optA}
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${q1Obj.optB}
            </label>
          </div>
        </div>

        <div style="background: #fafafa; border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px;">
          <div style="font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 8px;">
            ${q2Obj.text}
          </div>
          <div style="display: flex; gap: 24px; font-size: 15px; font-weight: 700; color: #475569;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${q2Obj.optA}
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
              <span style="font-size: 18px;">☐</span> ${q2Obj.optB}
            </label>
          </div>
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; padding: 16px;">
        <div style="font-size: 14px; font-weight: 800; color: #5b21b6; margin-bottom: 8px;">
          ✏️ BÀI TẬP GHÉP TỪ THÀNH CÂU HOÀN CHỈNH (AI):
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #334155; margin-bottom: 8px;">
          Từ gợi ý: <span style="background: #ddd6fe; color: #5b21b6; padding: 2px 8px; border-radius: 4px;">${wordHintText}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 700; color: #0f172a;">
          <span>Viết lại câu hoàn chỉnh:</span>
          <div style="border-bottom: 2px solid #5b21b6; flex: 1; height: 32px;"></div>
        </div>
      </div>
    </div>
  `;
}


