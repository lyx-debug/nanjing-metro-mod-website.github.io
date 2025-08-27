// 平滑滚动到锚点
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 图片轮播功能
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const sliderTrack = slider.querySelector('.slider-track');
        const sliderItems = slider.querySelectorAll('.slider-item');
        const prevButton = slider.querySelector('.slider-prev');
        const nextButton = slider.querySelector('.slider-next');

        let currentIndex = 0;
        const itemWidth = sliderItems[0].clientWidth;

        function updateSlider() {
            sliderTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            updateSlider();
        });

        // 响应式调整
        window.addEventListener('resize', updateSlider);
    });
});