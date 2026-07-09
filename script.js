const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  const ledgerRows = document.querySelectorAll('.ledger-row');
  const io2 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, {threshold:0.4});
  ledgerRows.forEach(el=>io2.observe(el));