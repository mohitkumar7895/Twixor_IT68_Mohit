function Footer() {
  return (
    <footer className="relative mt-4 md:mt-8 pt-4 pb-18 md:pb-4 px-6 md:px-16 bg-[linear-gradient(180deg,transparent_0%,rgba(13,15,26,0.3)_0%,#0a0c14_100%)] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 md:gap-12 mb-6">
          {/* Company */}
          <div>
            <h4 className="mb-3 text-white text-[14px] md:text-[15px] font-bold uppercase opacity-70">Company</h4>
            <div className="flex flex-col gap-2">
              {['About Us', 'Careers'].map(link => (
                <a key={link} href="#" className="text-text-secondary text-[13px] no-underline hover:text-white transition-colors w-fit">{link}</a>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-3 text-white text-[14px] md:text-[15px] font-bold uppercase opacity-70">Support</h4>
            <div className="flex flex-col gap-2">
              {['Help Center', 'FAQ'].map(link => (
                <a key={link} href="#" className="text-text-secondary text-[13px] no-underline hover:text-white transition-colors w-fit">{link}</a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="mb-3 text-white text-[14px] md:text-[15px] font-bold uppercase opacity-70">Connect</h4>
            <div className="flex gap-4">
              {['f', 't', 'i', 'y', 'w'].map(social => (
                <a key={social} href="#" className="text-white opacity-60 hover:opacity-100 hover:text-[#1a73e8] text-[15px] transition-all">
                  <span className="capitalize">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Store badges */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="mb-3 text-white text-[14px] md:text-[15px] font-bold uppercase opacity-70">App</h4>
            <div className="flex flex-col gap-2">
              <a href="#"><img src="/google-playstore.webp" alt="Play Store" className="h-8 w-auto opacity-80" /></a>
              <a href="#"><img src="/ios-appstore.webp" alt="App Store" className="h-8 w-auto opacity-80" /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-3 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex gap-4">
            <a href="#" className="text-text-secondary text-[10px] md:text-[11px] no-underline hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-secondary text-[10px] md:text-[11px] no-underline hover:text-white transition-colors">Terms of Use</a>
          </div>
          <span className="text-text-secondary text-[10px] md:text-[11px] opacity-40">© 2026 STAR. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
