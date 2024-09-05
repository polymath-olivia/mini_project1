document.addEventListener("DOMContentLoaded", function () {
  // Get the button
  var topButton = document.getElementById("topBtn");

  // 페이지를 스크롤할 때 실행되는 함수
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block"; // 스크롤이 20px 이상 내려가면 버튼 표시
    } else {
      topButton.style.display = "none"; // 그 외에는 버튼 숨김
    }
  }

  // 그리드 뷰 버튼과 리스트 뷰 버튼을 선택
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");
  const viewContainer = document.getElementById("view-container");

  // 그리드 뷰로 변경
  gridViewBtn.addEventListener("click", function () {
    viewContainer.classList.add("grid-view");
    viewContainer.classList.remove("list-view");
  });

  // 리스트 뷰로 변경
  listViewBtn.addEventListener("click", function () {
    viewContainer.classList.add("list-view");
    viewContainer.classList.remove("grid-view");
  });
});

// 버튼을 클릭하면 페이지 상단으로 스크롤
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게 상단으로 이동
}
