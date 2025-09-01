// Données initiales
const initialReviews = [
  { author: "Léa", rating: 5, text: "Excellent produit !" },
  { author: "Tom", rating: 4, text: "Rapport qualité/prix top." },
  {
    author: "Bob",
    rating: 5,
    text: "Design propre et prise en main rapide.",
  },
];

function initReviews() {
  const list = document.getElementById("review-list");
  const form = document.getElementById("review-form");
  const template = document.getElementById("review-template");
  const filterSelect = document.getElementById("filter-rating");

  // Rendu des étoiles
  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  // Rendu d'un avis
  const renderReview = (review) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.rating = String(review.rating);
    node.querySelector(".review-author").textContent = review.author;

    // Note avec étoiles
    const ratingEl = node.querySelector(".review-rating");
    ratingEl.textContent = renderStars(review.rating);
    ratingEl.setAttribute("aria-label", `${review.rating} sur 5`);

    node.querySelector(".review-text").textContent = review.text;
    node
      .querySelector(".btn-delete")
      .setAttribute("aria-label", `Supprimer l'avis de ${review.author}`);

    // Ajout en début de liste
    list.prepend(node);
  };

  // Filtre par note
  const applyFilter = () => {
    const value = filterSelect.value;
    list.querySelectorAll(".review").forEach((el) => {
      el.style.display =
        value === "all" || el.dataset.rating === value ? "" : "none";
    });
  };

  // Affichage initial
  initialReviews.forEach(renderReview);

  // Ajout via formulaire
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const author = data.get("author")?.trim();
    const rating = Number(data.get("rating"));
    const text = data.get("text")?.trim();

    renderReview({ author, rating, text });
    form.reset();
    form.querySelector("#review-author").focus();
    applyFilter();
  });

  // Suppression
  list.addEventListener("click", (e) => {
    if (e.target.closest(".btn-delete")) {
      e.target.closest(".review")?.remove();
    }
  });

  // Filtre
  filterSelect.addEventListener("change", applyFilter);
}

document.addEventListener("DOMContentLoaded", initReviews);
