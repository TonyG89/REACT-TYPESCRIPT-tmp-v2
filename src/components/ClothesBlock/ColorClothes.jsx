import React from 'react'

function ColorClothes() {
    const colors=[{color: "white", name:"30", hex: "#000000"},
        ]
    return (
        <>
            <div className="product-colors-list__item color_pick_main"

            >
                <div className="color-block color-block_bb" style="background-color: #ffffff">
                    <div className="color-block__code" style="color: #000000">30</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"

            >
                <div className="color-block color-block_bb" style="background-color: #001350">
                    <div className="color-block__code" >32</div>
                </div>
            </div>

            {/* <div className="product-colors-list__item color_pick_main"
                data-id_color="37"
                data-name="34 Солнечно Желтый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #ffd504">
                    <div className="color-block__code" style="color: #3b3b3b">34</div>
                </div>
            </div>
            <div className="product-colors-list__item color_pick_main"
                data-id_color="38"
                data-name="36 Черный"
                data-price="767.11"
            >
                <div className="color-block color-block_bb" style="background-color: #000000">
                    <div className="color-block__code" style="color: #ffffff">36</div>
                </div>
            </div>
            <div className="product-colors-list__item color_pick_main"
                data-id_color="39"
                data-name="38 Темно-Зеленый (Бутылочный)"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #005828">
                    <div className="color-block__code" style="color: #ffffff">38</div>
                </div>


            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="40"
                data-name="40 Красный"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #cf0a00">
                    <div className="color-block__code" style="color: #ffffff">40</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="42"
                data-name="44 Оранжевый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #ff7d10">
                    <div className="color-block__code" style="color: #ffffff">44</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="41"
                data-name="41 Бордовый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #800000">
                    <div className="color-block__code" style="color: #ffffff">41</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="43"
                data-name="47 Ярко-Зеленый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #00a331">
                    <div className="color-block__code" style="color: #ffffff">47</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="44"
                data-name="51 Ярко-Синий"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #2c00bb">
                    <div className="color-block__code" style="color: #ffffff">51</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="45"
                data-name="52 Светло-Розовый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #ffc4ea">
                    <div className="color-block__code" style="color: #ffffff">52</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="46"
                data-name="57 Малиновый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #ff14c1">
                    <div className="color-block__code" style="color: #ffffff">57</div>
                </div>
            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="47"
                data-name="59 Оливковый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #556b2f">
                    <div className="color-block__code" style="color: #ffffff">59</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="54"
                data-name="94 Серо-Лиловый"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #cfcfcf">
                    <div className="color-block__code" style="color: #000000">94</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="60"
                data-name="GL Светлый Графит"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #3b3b3b">
                    <div className="color-block__code" style="color: #ffffff">GL</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="59"
                data-name="CQ Шоколадный"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #4c2b11">
                    <div className="color-block__code" style="color: #ffffff">CQ</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="57"
                data-name="AZ Глубокий Темно-Синий"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #0f0038">
                    <div className="color-block__code" style="color: #ffffff">AZ</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="80"
                data-name="YT Небесно-Голубой"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #b8dbff">
                    <div className="color-block__code" style="color: #000000">YT</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="81"
                data-name="ZU Ультрамарин"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #0595fc">
                    <div className="color-block__code" style="color: #ffffff">ZU</div>
                </div> 

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="69"
                data-name="PE Purple"
                data-price="656.41"
            >
                <div className="color-block color-block_bb" style="background-color: #4b006e">
                    <div className="color-block__code" style="color: #ffffff">PE</div>
                </div>
            </div>
            <div className="product-colors-list__item color_pick_main"
                data-id_color="446"
                data-name="HD Тёмно-Серый Ретро"
                data-price="656.41"
            >
                <div className="color-block" style="background-image: url(https://futbolki.net/img/co/446.jpg)"></div>
            </div>
            <div className="product-colors-list__item color_pick_main"
                data-id_color="447"
                data-name="VF Тёмно-Синий Ретро"
                data-price="656.41"
            >
                <div className="color-block" style="background-image: url(https://futbolki.net/img/co/447.jpg)"></div>

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="448"
                data-name="R6 Синий Ретро"
                data-price="656.41"
            >
                <div className="color-block" style="background-image: url(https://futbolki.net/img/co/448.jpg)"></div>

            </div>
            <div className="product-colors-list__item color_pick_main"
                data-id_color="449"
                data-name="VH Красный Ретро"
                data-price="656.41"
            >
                <div className="color-block" style="background-image: url(https://futbolki.net/img/co/449.jpg)"></div>

            </div>

            <div className="product-colors-list__item color_pick_main"
                data-id_color="450"
                data-name="RX Зелёный Ретро"
                data-price="656.41"
            >
                <div className="color-block" style="background-image: url(https://futbolki.net/img/co/450.jpg)"></div>
            </div> */}
        </>

    )
}

export default ColorClothes