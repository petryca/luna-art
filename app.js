const items = document.querySelectorAll('#grid > div');

for (const item of items.values()) {
    
    new Waypoint.Inview({
        element: item,
        enter(direction) {
            if (direction == 'down') {
                item.classList.add('move-up');
            }
        },
        exited(direction) {
            if (direction == 'up') {
                item.classList.remove('move-up');
            }
        }
    });
    
}









