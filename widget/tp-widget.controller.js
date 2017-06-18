class TpWidgetCtrl {
    constructor ( TpWidgetService ) {
        this.TpWidgetService = TpWidgetService;
    }

    $onInit () {
        this.reviews = this.TpWidgetService.getReviews();
    }
}

TpWidgetCtrl.$inject = ['TpWidgetService'];

export default TpWidgetCtrl;