(()=>{"use strict";function e(e,t,n,r){var o=document.querySelector("#card-template").content.cloneNode(!0).querySelector(".card"),c=o.querySelector(".card__image"),d=o.querySelector(".card__title"),a=o.querySelector(".card__delete-button"),u=o.querySelector(".card__like-button");return c.src=e.link,c.alt=e.name,d.textContent=e.name,a.addEventListener("click",(function(){return t(o)})),u.addEventListener("click",n),c.addEventListener("click",(function(){return r(e)})),o}function t(e){e.target.classList.toggle("card__like-button_is-active")}function n(e){e.remove()}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),e.addEventListener("mousedown",d)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),e.removeEventListener("mousedown",d)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}function d(e){e.target===e.currentTarget&&o(e.target)}var a=document.querySelector(".places__list"),u=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),s=document.querySelector(".popup_type_edit"),p=document.querySelector(".popup_type_new-card"),l=document.querySelector(".popup_type_image"),m=document.forms["edit-profile"],v=document.forms["new-place"],_=document.querySelector(".profile__title"),f=document.querySelector(".profile__description"),y=m.elements.name,k=m.elements.description,q=v.elements["place-name"],S=v.elements.link,g=l.querySelector(".popup__image"),E=l.querySelector(".popup__caption");function L(e){g.src=e.link,g.alt=e.name,E.textContent=e.name,r(l)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){var o=e(r,n,t,L);a.append(o)})),u.addEventListener("click",(function(){y.value=_.textContent,k.value=f.textContent,r(s)})),i.addEventListener("click",(function(){return r(p)})),m.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=y.value,f.textContent=k.value,o(s)})),v.addEventListener("submit",(function(r){r.preventDefault();var c=e({name:q.value,link:S.value},n,t,L);a.prepend(c),o(p),r.target.reset()})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)}))}))})();