class TpWidgetItemCtrl {
    constructor ( ) {
        this.bodyCollapsed = true;
    }

    getAvatarUrl () {
        return `static-images/${this.item.fullName.split(' ').join('-').toLowerCase()}.png`;
    }

    bodyToggle () {
        this.bodyCollapsed = !this.bodyCollapsed;
    }
}

TpWidgetItemCtrl.$inject = [];

export default TpWidgetItemCtrl;