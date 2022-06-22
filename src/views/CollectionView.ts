import { Collection } from "../models/Collection";

export abstract class CollectionView<T,K> {

    constructor(protected parent:Element, protected collection: Collection<T,K>){}

    render(): void {
        this.parent.innerHTML = ''
        const templateElement = document.createElement('template')

        for (const model of this.collection.models) {
            const wrapperElement = document.createElement('div')
            this.renderItem(model,wrapperElement)
            templateElement.content.append(wrapperElement)
        }

        this.parent.append(templateElement.content)
    }

    abstract renderItem(model:T, itemParent: Element): void

}