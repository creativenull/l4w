/// <reference path="../core/AbstractGrid.ts" />
/// <reference path="../core/util/Utils.ts" />

/**
 * Module for managing canvas autosizing
 */
class StaticGrid extends AbstractGrid {

    private tileColumns: number;
    private rowsList: number[];
    private columnsList: number[];
    private canvasScales: number[];
    private overriddenProps: Map<string, number>;

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (grid: StaticGrid): void },
        gridType: GridTypeEnum,
        overriddenProperties?: Map<string, number>
        ) {
        this.overriddenProps = overriddenProperties;
        super(cnvs, onCompleted, gridType);
    }

    deferredInit(props: Map<string, number>) {
        if (!Utils.isEmpty(this.overriddenProps)) {
            props = Utils.mergeMaps(this.overriddenProps, props);
        }
        super.deferredInit(props);
        this.tileColumns = props.get("tileColumns");

        switch (this.gridType) {
            case GridTypeEnum.mapper:
                this.canvasScales = new Array();
                this.canvasScales.push(props.get("canvasScaleD"));
                this.canvasScales.push(props.get("canvasScaleC"));
                this.canvasScales.push(props.get("canvasScaleB"));
                this.canvasScales.push(props.get("canvasScaleA"));

                var totCanvasScales = this.canvasScales.length;
                this.rowsList = new Array(totCanvasScales);
                this.columnsList = new Array(totCanvasScales);

                var selectedScaleId = totCanvasScales - 1;
                for (var i = 0; i < totCanvasScales; i++) {
                    this.rowsList[i] = Math.floor(this.rows / this.canvasScales[i]);
                    this.columnsList[i] = Math.floor(this.columns / this.canvasScales[i]);
                }
                this.selectScale(selectedScaleId);
                break;
            case GridTypeEnum.tilePicker:
                this.scale=1;
                this.updateSizingDerivates();
        }
    }

    /**
     * Usato quando cambia la scala
     */
    selectScale(scaleId: number) {
        this.rows = this.rowsList[scaleId];
        this.columns = this.columnsList[scaleId];
        this.updateSizingDerivates();
        this.scale = this.canvasScales[scaleId];
    }
    
    /**
     * Usato quando cambia la dimensione
     */
    updateSize(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.updateSizingDerivates();
    }

    getBoundariesX(focusX: number, limit: number): { min: number; max: number } {
        //TODO seleziona solo il range che può essere cambiato
        return super.getBoundariesX(focusX, limit);
    }

    getBoundariesY(focusY: number, limit: number): { min: number; max: number } {
        //TODO seleziona solo il range che può essere cambiato
        return super.getBoundariesY(focusY, limit);
    }

    refresh() {
        super.refresh();

    }
}