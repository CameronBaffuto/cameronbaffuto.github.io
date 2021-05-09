function liTemplate(ui) {
    return `
            <ul class="js-filter uk-child-width-1-3 uk-child-width-1-3@m uk-text-center" uk-grid>
            <li data-color="${ui.datacolor}" data-size="${ui.datasize}" data-brand="${ui.databrand}">
                <div class="uk-flex-middle" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="700x500.png" alt="">
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">${ui.title}</h3>
                                <p>${ui.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
        `
}

document.getElementById("UIdatali").innerHTML = `
        ${uiData.map(liTemplate).join('')}
    `