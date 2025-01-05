// 서브메뉴 드롭다운 만들기
document.addEventListener('DOMContentLoaded', function () {
    // 모든 .mainmenu 항목에 클릭 이벤트 추가
    const menuItems = document.querySelectorAll('nav ul li.mainmenu');
    console.log("menuItems:", menuItems)

    menuItems.forEach(menu => {
        menu.addEventListener('click', function (event) {
            // 클릭된 항목의 서브메뉴 토글
            event.stopPropagation();  // 부모 메뉴 항목으로 이벤트 전파 방지

            // 모든 메뉴 항목에서 active 클래스 제거 (현재 서브메뉴 닫기)
            menuItems.forEach(otherMenu => {
                if (otherMenu !== menu) {
                    otherMenu.classList.remove('active');
                }
            });

            // 클릭한 항목의 서브메뉴를 토글
            menu.classList.toggle('active');
        });
    });

    // 페이지에서 다른 부분을 클릭했을 때 서브메뉴를 닫기
    document.addEventListener('click', function (event) {
        const isClickInside = event.target.closest('nav');
        if (!isClickInside) {
            // nav 영역 외부를 클릭했을 때 모든 서브메뉴 닫기
            menuItems.forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });
});

// 메뉴 항목 클릭시 AJAX요청으로 main부분만 동적으로 바꿔주기
document.addEventListener('DOMContentLoaded', function () {
    // 이미지 클릭 시 이벤트 처리
    const headerImageLink = document.getElementById('headerImageLink');

    if (headerImageLink) {
        headerImageLink.addEventListener('click', function (event) {
            event.preventDefault(); // 링크 기본 동작 방지

            // menuId=0을 사용하여 main.html을 요청
            fetch('/getMainContent?menuId=0')
                .then(response => response.text())
                .then(data => {
                    // main 부분만 업데이트
                    document.getElementById('main').innerHTML = data;
                })
                .catch(error => console.error('Error fetching main content:', error));
        });
    }

    // 메뉴 항목 클릭 이벤트 처리
    document.querySelectorAll('.submenu li').forEach(menuItem => {
        menuItem.addEventListener('click', function (event) {
            event.preventDefault(); // 페이지 새로 고침 방지

            // 클릭된 li 요소에서 data-menu-id 값 가져오기
            const menuId = menuItem.getAttribute('data-menu-id');

            // AJAX 요청 보내기
            fetch(`/getMainContent?menuId=${menuId}`)
                .then(response => response.text())
                .then(data => {
                    // main 부분만 업데이트
                    document.getElementById('main').innerHTML = data;
                })
                .catch(error => console.error('Error fetching main content:', error));
        });
    });
});

