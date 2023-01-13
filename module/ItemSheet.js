/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export default class NecrobiozzItemSheet extends ItemSheet {

  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["necrobiozz", "sheet", "item"],
      width: 520,
      height: 410,
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "properties"}]
    });
  }

  /** @override */
  get template() {
    return `systems/FVTT10_Necrobiozz/templates/item-${this.item.type}-sheet.html`;
  }

  /** @inheritdoc */
  getData(options) {
    const context = super.getData(options);

    context.systemData = context.data.system;
    context.config = CONFIG.Necrobiozz;

    console.log(context)
    return context;
  }
}