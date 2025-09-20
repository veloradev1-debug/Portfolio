// Open preview modal and populate data
function openPreview(btn){
  const card = btn.closest('.project-card');
  if(!card) return;
  const title = card.dataset.title || '';
  const desc = card.dataset.desc || '';
  const img = card.dataset.img || '';
  const live = card.dataset.live || '#';

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalImage').src = img;
  document.getElementById('modalLiveLink').href = live;

  const modal = document.getElementById('previewModal');
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  const modal = document.getElementById('previewModal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

// close on Esc
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') closeModal();
});
