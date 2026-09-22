const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const modal=$("#modal"), modalContent=$("#modalContent");
const content={
partner:`<span class="eyebrow">PARTNER ONBOARDING</span><h2>Become a partner.</h2><p>Submit your details to start the onboarding process. This frontend form is ready to connect to a real backend later.</p><form class="modal-form" id="partnerForm"><input required name="name" placeholder="Full name"><input required name="mobile" type="tel" placeholder="Mobile number"><input required name="email" type="email" placeholder="Email address"><input required name="business" placeholder="Business / shop name"><input required name="location" placeholder="City / State"><label><input required type="checkbox"> I agree to be contacted regarding partner onboarding.</label><button class="btn primary large">Submit Application <span class="btn-icon"><svg class="ui-icon arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button></form>`,
login:`<span class="eyebrow">PARTNER LOGIN</span><h2>Welcome back.</h2><p>Login UI is ready for authentication integration. No fake account or password system is created on the frontend.</p><form class="modal-form" id="loginForm"><input required placeholder="Mobile number or email"><input required type="password" placeholder="Password"><button class="btn primary large">Login</button></form><div class="modal-links"><a href="#" id="forgot">Forgot password?</a><span>Secure access after backend integration</span></div>`,
privacy:`<span class="eyebrow">LEGAL</span><h2>Privacy Policy</h2><p>This starter frontend does not silently store submitted form data. When backend services are connected, the final privacy policy should be updated to accurately describe data collection, storage, sharing, retention, security and user rights.</p><p>Do not connect production personal or financial data until the appropriate privacy, security and compliance requirements are implemented.</p>`,
terms:`<span class="eyebrow">LEGAL</span><h2>Terms & Conditions</h2><p>Service availability, eligibility, fees, transaction limits, KYC requirements and other conditions depend on the applicable service provider and partner agreement.</p><p>This website frontend is an interface and does not itself perform financial transactions without authorized backend/provider integrations.</p>`
};
function openModal(type){modalContent.innerHTML=content[type];modal.classList.add("open");if(type==="partner")$("#partnerForm").addEventListener("submit",e=>{e.preventDefault();modalContent.innerHTML='<span class="eyebrow">RECEIVED</span><h2>Application captured.</h2><p>Your frontend demo has captured the form. Connect this form to your authorized backend/API before using it for real onboarding.</p><button class="btn primary large" id="done">Close</button>';$("#done").onclick=closeModal});if(type==="login")$("#loginForm").addEventListener("submit",e=>{e.preventDefault();alert("Authentication backend is not connected yet.");});}
function closeModal(){modal.classList.remove("open")}
$$("[data-open]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.open)));
$("#modalClose").onclick=closeModal;modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
$("#menuBtn").onclick=()=>$("#mobileMenu").classList.add("open");$("#closeMenu").onclick=()=>$("#mobileMenu").classList.remove("open");
$$(".mobile-menu a").forEach(a=>a.onclick=()=>$("#mobileMenu").classList.remove("open"));
const serviceText={
"AEPS":"Aadhaar Enabled Payment System (AEPS) can provide supported banking services through an authorized service-provider integration.",
"BBPS":"Bharat Bill Payment System (BBPS) services can support bill payments across available biller categories through an authorized integration.",
"Money Transfer":"Domestic money transfer services require an authorized provider, KYC/compliance setup and backend transaction integration.",
"Recharge":"Recharge services can support available mobile and utility operators through an authorized recharge provider.",
"PAN Card":"PAN-related services can be offered through the applicable authorized processing and verification workflow.",
"DTH":"DTH recharge services can be connected for supported operators through an authorized provider."
};
$$(".service").forEach(card=>card.addEventListener("click",()=>{const n=card.dataset.service;$("#detailTitle").textContent=n;$("#detailText").textContent=serviceText[n];$("#serviceDetail").classList.add("show");$("#serviceDetail").scrollIntoView({behavior:"smooth",block:"center"})}));
$("#detailClose").onclick=()=>$("#serviceDetail").classList.remove("show");
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});$$(".reveal").forEach(e=>observer.observe(e));
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);const subject=encodeURIComponent("Grahak Service Center Enquiry - "+f.get("name"));const body=encodeURIComponent(`Name: ${f.get("name")}\nMobile: ${f.get("phone")}\nEmail: ${f.get("email")}\n\nMessage:\n${f.get("message")}`);location.href=`mailto:nikhilsharma32102003@gmail.com?subject=${subject}&body=${body}`});
$("#year").textContent=new Date().getFullYear();
