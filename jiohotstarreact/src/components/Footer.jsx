function Footer() {
  return (
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
        </div>
        <div class="footer-col">
          <h4>View Website in</h4>
          <button class="footer-lang-btn" type="button">
            <span class="footer-lang-check">✓</span>
            <span>English</span>
          </button>
        </div>
        <div class="footer-col">
          <h4>Need Help?</h4>
          <a href="#">Visit Help Center</a>
          <a href="#">Share Feedback</a>
        </div>
        <div class="footer-col footer-connect">
          <h4>Connect with Us</h4>
          <div class="f-socials">
            <a class="soc" href="#" aria-label="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
            <a class="soc soc-x" href="#" aria-label="X"><i class="bi bi-twitter-x" aria-hidden="true"></i></a>
          </div>
          <div class="store-badges">
            <a class="store-badge" href="#" aria-label="Get it on Google Play">
              <img src="google-playstore.webp" alt="Get it on Google Play" />
            </a>
            <a class="store-badge" href="#" aria-label="Download on the App Store">
              <img src="ios-appstore.webp" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="f-copy">© 2026 STAR. All Rights Reserved.</span>
        <div class="footer-legal-links">
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
