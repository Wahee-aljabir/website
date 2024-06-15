function scrollToSection(sectionClass) {
    document.querySelector('.' + sectionClass).scrollIntoView({ behavior: 'smooth' });
}