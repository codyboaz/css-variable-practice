function handleChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
const controls = document.querySelectorAll('.controls input');
controls.forEach(control => control.addEventListener('change', handleChange));
controls.forEach(control => control.addEventListener('mousemove', handleChange));