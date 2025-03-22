const translations = {
  es: {
    calcTitle: "Calculadora de Hipoteca",
    propertyPrice: "Precio de la Propiedad:",
    loanAmount: "Monto del Préstamo:",
    loanTerm: "Plazo del Préstamo (años):",
    interestRate: "Tasa de Interés Anual (%):",
    includeExpenses: "Incluir Gastos Adicionales (10%)",
    resultsTitle: "Resultados",
    monthlyPayment: "Pago Mensual:",
    totalPayment: "Pago Total:",
    totalInterest: "Interés Total:",
    article: `
            <h1>¡Hipoteca en Japón!</h1>
            <p class="intro">¡Por petición de los televidentes, en el canal Zmey-TV presentamos el programa educativo "¡Hipoteca en Japón!"!</p>

            <h2>Mi Experiencia Personal</h2>
            <p>A los 33 años finalmente consolidé la idea de que era hora de establecerme y que cambiar Japón por otro país postindustrial no me resultaba interesante ni viable. Desde niño soñaba con tener mi propio refugio; mis padres siempre desearon una casa propia, ese sueño me fue transmitido, y así llegamos al punto de decir: "¡Quiero comprar una vivienda en Japón!"</p>

            <h2>Contexto: Toyama, Japón</h2>
            <p>Aclaro que esta es mi experiencia personal y no pretendo que sea la única verdad absoluta. Todo ocurrió en la ciudad de Toyama (富山市), una provincia japonesa. En capitales como Tokio o en la región de Kansai (関西), el proceso es claramente más complicado y costoso (¡esos famosos oku (億), millones y millones de yenes!), pero creo que en otras zonas rurales como Gifu (岐阜) o Miyagi (宮城) la experiencia es similar.</p>

            <h2>El Proceso de Búsqueda</h2>
            <p>Busqué casa durante casi un año, desde mayo de 2024, incluso antes de obtener mi residencia permanente (永住権, eijūken). No los aburriré con detalles de mi larga búsqueda, pero descarté rápidamente comprar un apartamento. Quería privacidad absoluta y solo consideré casas con terreno propio.</p>

            <h2>La Casa Ideal</h2>
            <p>En enero de 2025, apareció una excelente opción cerca de mi área actual por 13,5 millones de yenes (aprox. 83.970.000 CLP). Quise verla, pero el agente inmobiliario (不動産, fudosan) exigía una aprobación hipotecaria previa, para evitar interesados sin verdadera intención de compra.</p>

            <h2>El Proceso Hipotecario</h2>
            <p>Siguiendo consejos locales, acudí al banco Mitsui Sumitomo (SMBC), conocido por su flexibilidad con extranjeros. SMBC ofrece la posibilidad de solicitar la hipoteca en línea, proceso muy eficiente gracias a la asistencia de Matsuda-san, quien siempre estuvo disponible por teléfono y chat, aclarando todas mis dudas.</p>

            <h2>Documentación Requerida</h2>
            <p>Para la aprobación previa, SMBC pidió pocos documentos:</p>
            <ul>
                <li>Tarjeta de residencia</li>
                <li>Certificado de residencia (住民票, jūminhyō)</li>
                <li>Certificado de impuestos e ingresos (所得・課税証明書, shotoku/kazei shōmeisho)</li>
                <li>Comprobante de retención salarial (給与所得の源泉徴収票, kyūyo shotoku no gensenchōshūhyō)</li>
            </ul>
            <p>Solicitando 15 millones de yenes (93.300.000 CLP) a 20 años, obtuve aprobación previa en solo una semana.</p>

            <h2>Proceso de Compra</h2>
            <p>Tras visitar la casa, decidí comprarla inmediatamente, lo que alegró al vendedor. Firmamos un documento de intención de compra y pagué un depósito (手付金, tetsukekin) de 500.000 yenes (3.110.000 CLP), cerca del 4% del valor de la casa. Este depósito es obligatorio para asegurar el trato.</p>

            <h2>Costos y Gastos</h2>
            <h3>Depósito Inicial</h3>
            <p>Depósito (手付金, tetsukekin): 500.000 yenes (3.110.000 CLP)</p>

            <h3>Gastos Adicionales</h3>
            <ul>
                <li>Comisión inmobiliaria (仲介手数料, chūkai tesūryō): 511.500 yenes (3.182.000 CLP)</li>
                <li>Comisión bancaria por gestión hipotecaria (2,2% del préstamo): 321.200 yenes (1.997.864 CLP)</li>
                <li>Seguro obligatorio contra incendios y desastres naturales por 5 años: 340.100 yenes (2.115.422 CLP)</li>
                <li>Honorarios notariales por hipoteca (抵当権設定): 70.923 yenes (441.139 CLP)</li>
                <li>Honorarios notariales por transferencia catastral (所有権移転): 127.096 yenes (790.537 CLP)</li>
                <li>Impuestos y timbres fiscales: aproximadamente 10.000 yenes (62.200 CLP)</li>
            </ul>
            <p>En total, los gastos adicionales alcanzaron 1.370.819 yenes (8.527.162 CLP). Estos costos pueden ser incluidos en el préstamo hipotecario hasta un máximo del 10% del valor de la propiedad.</p>

            <h3>Impuesto sobre Adquisición de Bienes Raíces</h3>
            <p>Además, existe otro gasto importante poco mencionado por los agentes: el impuesto sobre adquisición de bienes raíces (不動産取得税), un impuesto único que se cobra aproximadamente seis meses después de la compra. Este impuesto se calcula según la valoración catastral del terreno y la casa, no se puede pagar en cuotas y debe pagarse en un plazo breve (generalmente un mes). Por ello, es fundamental estar preparado para afrontar este gasto.</p>

            <h2>Opciones de Pago Hipotecario</h2>
            <p>Al establecer la hipoteca, hay dos opciones principales para la forma de pago:</p>
            <ol>
                <li><strong>Pago mensual fijo (元利均等返済)</strong>: El capital e intereses se distribuyen mensualmente para que cada mes se pague la misma cantidad. Aunque esto implica una ligera mayor sobretasa a largo plazo, facilita los pagos anticipados. Esta fue mi elección.</li>
                <li><strong>Amortización con cuotas decrecientes (元金均等返済)</strong>: Con este método, la cantidad mensual varía y disminuye a lo largo del tiempo, ya que se paga más capital al principio. Las cuotas iniciales son más altas, pero la sobretasa total es menor. Sin embargo, tiene condiciones más estrictas para pagos anticipados.</li>
            </ol>

            <h2>Cuidado con la Tasa Variable</h2>
            <p>Un punto crítico a considerar es la tasa de interés. Los bancos suelen promocionar tasas variables (変動金利) extremadamente bajas (0,5-0,8%) para atraer clientes. La trampa está en que, aunque la tasa no puede cambiar durante los primeros 5 años por ley, el banco revisa la tasa cada seis meses internamente. Si la tasa aumenta durante ese período, te cobrarán la diferencia en un solo pago al final de tu hipoteca.</p>
            
            <p>Los bancos ofrecen diversos esquemas: combinaciones de períodos con tasa fija y variable, o incluso dividir el préstamo con una parte a tasa fija y otra variable. Opté por una tasa fija del 2,6% durante los 20 años completos, a pesar de los intentos del banco por convencerme de elegir una tasa variable.</p>

            <h2>Detalles Finales</h2>
            <p>Con todo listo, la hipoteca final aprobada fue de 14,6 millones de yenes (90.812.000 CLP) a 20 años con una tasa fija del 2,6% anual. Elegí pagos mensuales fijos, quedando cuotas cercanas a los 78.000 yenes (485.160 CLP).</p>

            <p>Finalmente, los gastos totales del proceso fueron de 14.880.819 yenes (92.558.693 CLP), considerando el precio de la casa, gastos adicionales y depósito inicial.</p>

            <h2>Conclusión</h2>
            <p>Si bien asumir una hipoteca implica compromisos económicos importantes, la satisfacción de cumplir el sueño de tener una vivienda propia en Japón vale cada esfuerzo y cada peso invertido.</p>

            <p>¡Espero que esta información sea útil e interesante para todos aquellos que sueñan con adquirir una vivienda en Japón!</p>
        `,
  },
  ru: {
    calcTitle: "Ипотечный Калькулятор",
    propertyPrice: "Стоимость Недвижимости:",
    loanAmount: "Сумма Кредита:",
    loanTerm: "Срок Кредита (лет):",
    interestRate: "Годовая Процентная Ставка (%):",
    includeExpenses: "Включить Дополнительные Расходы (10%)",
    resultsTitle: "Результаты",
    monthlyPayment: "Ежемесячный Платеж:",
    totalPayment: "Общая Выплата:",
    totalInterest: "Общие Проценты:",
    article: `
            <h1>Ипотека в Японии</h1>
            <p class="intro">По заявкам телезрителей на канале Змей-ТВ познавательная передача "Ипотека в Японии"!</p>

            <h2>Личный Опыт</h2>
            <p>На 33ем году жизни в моей голове окончательно оформилась идея, что надо оседать и что менять Японию на другую постиндустриальную страну мне неинтересно/нецелесообразно. С детства мне всегда была нужна своя личная нора, родители всегда мечтали о собственном доме, эта мечта передалась, и вот мы в точке "хочу купить себе жильё в Японии".</p>

            <h2>Контекст: Тояма, Япония</h2>
            <p>Сразу оговорюсь, это мой личный опыт, но единственно верную истинную истину не претендую, произошло действие в Тоямске, в провинции. В столице или кансайской агломерации явно всё жестче и не только по ценнику (ох уж эти оку оку, миллиарды миллионов иен...), но, думаю, для другой инаки а-ля Гифуново или Миягино общий смысл примерно такой же.</p>

            <h2>Процесс Поиска</h2>
            <p>Выбирал я дом почти год, с мая 2024, еще даже до получения статуса постоянного резидента 永住権, но не буду мучать вас рассказами о своих мучениях поиска и выбора. Скажу лишь, что идею покупки квартиры я отмёл сразу, ноль желания продолжать жить с соседями за стеной, и рассматривал только дом и только с выкупом земли под ним, никаких раздельных сделок.</p>

            <h2>Идеальный Дом</h2>
            <p>В конце января 2025 появился недалеко от ареала моего нынешнего обитания очень хороший вариант, я захотел его посмотреть, но агент-фудосан мне сказал "прийти смотреть можно только с предварительно одобренной ипотекой". Что ж, вперед за предварительным одобрением 住宅ローン事前審査 (仮審査)!</p>

            <h2>Банковский Процесс</h2>
            <p>Карманные фудосаны моего босса заранее сказали, что самый лояльный к гайдзинам банк сейчас это Мицуи Сумитомо aka SMBC, туда я и пополз. У SMBC, как оказалось, есть замечательная возможность подаваться на ипотеку не только в отделении банка, но и полностью онлайн. Не знаю, мой ли такой уникальный случай или же это отлаженный не по японским меркам механизм, но онлайн-сервис оказался на высоте. Банковская барышня по имени Мацуда с первого дня и до последнего всегда была на связи, отвечала на любые вопросы белой обезьяны и стойко держалась, все содержание своих звонков всегда дублировала текстом в специальном чате.</p>

            <h2>Необходимые Документы</h2>
            <p>Для предварительного одобрения SMBC потребовал немного бумажек:</p>
            <ul>
                <li>Фото карточки иностранца</li>
                <li>Справка с места жительства (住民票)</li>
                <li>Справка о налогах и доходах (所得・課税証明書)</li>
                <li>Квитанция об удержании налогов с зарплаты (給与所得の源泉徴収票)</li>
            </ul>
            <p>Квитанцию об удержании вам надо просить по месту работы, если фирма за вас занимается вашими налоговыми делами. Если вы сами заполняете и подаёте налоговую декларацию 確定申告, то тогда банк требует её.</p>
            
            <p>Все эти документы SMBC попросил загрузить жепегом или пдфом, очень удобно. Так же надо указать, на какую сумму рассчитываешь взять кредит, если есть дом на примете уже - скинуть прям объявление с этим домом (хоть ссылкой на сайт, хоть памфлетом), но это необязательно для предварительного одобрения.</p>
            
            <p>"Мой" дом выставлялся за 13.5 млн иен, но я же его еще даже не видел, поэтому данные по дому давать не стал, а желаемую сумму указал 15 млн иен на 20 лет, на всякий случай побольше. Как оказалось, я, сам того не зная, поступил мудро. После предварительного одобрения нельзя увеличить уже сумму, надо заново будет проходить процедуру. Уменьшить же - да пожалуйста.</p>

            <h2>Процесс Покупки</h2>
            <p>За неделю мне одобрили предварительно кредит на 15 млн иен на 20 лет, и я пошел с агентом смотреть дом. Мне все понравилось, я сразу сказал "покупаю", чем очень обрадовал продавца, ему нужно быстрее продать дом, а японцы такие решения быстро не принимают. Это, кстати, объясняло условие наличия предварительного одобрения ипотеки - чтобы не приходили всякие пчелы, жалом поводить.</p>
            
            <p>Подписали с агентом бумагу о намерениях купить, так сказать, попросил меня бумажку о предварительном одобрении ипотеки и приехать к нему в офис через две недели для подписания договора купли-продажи 売買契約書. И вот тут начинается то, что мы все любим, ПОБОРЫ!</p>

            <h2>Расходы и Платежи</h2>
            <p>С собой нужно принести залог 手付金 наличкой. Залог по закону не должен превышать 20% стоимости дома, обычно это где-то 5-10%, у меня это почти 4% было, агент округлил до 500 тыс. Залог потом пойдет в часть оплаты дома, а нужен чтобы ты не съехал со сделки.</p>
            
            <p>При подписании договора агент рассказывает тебе все пункты договора и все нюансы по земле, вплоть до карт с угрозами затопления, "зацунамления" и т.п. Еще в свой экземпляр договора-купли продажи я должен вклеить акцизную марку 印紙 за 10000 иен. За свои посреднические услуги 仲介手数料 агент выставил 511500 иен.</p>

            <h2>Ипотечный Процесс</h2>
            <p>С договором купли-продажи мы уже подаемся полноценно на ипотеку 本審査. Все справки-бумажки, до этого отправленные онлайн, надо отправить оригиналы (заботливо присылают специальный конверт почтовый для этого), сверху еще справки о налогах за два предыдущих года и подтверждение печати 印鑑証明書 надо прислать.</p>
            
            <p>Да, в Японии подпись не котируется, у всех и каждого своя печать, которую регистрируешь в мэрии по месту жительства и которую на всех документах аки подпись ставишь. В электронном же виде надо отправить договор купли-продажи (все листы), данные фирмы агента недвижимости, данные по дому.</p>
            
            <p>Банковская барышня Мацуда посмотрела все мои данные, ага, дом 13.5 млн иен, да мы можем вам выдать такую сумму на 20 лет, это меньше предварительно одобренных 15 млн, включать дополнительно расходы по оформлению дома и ипотеки в тело кредита будете? Опаааа, снова разговор про поборы!</p>

            <h2>Дополнительные Расходы</h2>
            <p>А какие же обязательные расходы по купле дома можно впихнуть в тело кредита? Загибаем пальцы:</p>
            <ul>
                <li>Агентская комиссия 仲介手数料 (511500 иен в моем случае)</li>
                <li>Комиссия банка по обслуживанию ипотеки 銀行手数料/ローン関係手数料. Единоразовый платеж в самом начале ипотеки, составляет 2.2% от всего кредита (321200 иен у меня вышло)</li>
                <li>Обязательная страховка дома 火災保険 от пожара-землетрясения-цунами на 5 лет. Там куча факторов для расчёта, от возраста дома до как часто гадят чайки на тип вашей крыши (мне насчитали 340100 иен)</li>
                <li>Услуги нотариуса по закреплению ипотечной сделки 抵当権設定. Зависит от сумму кредита, у меня 70923 иены.</li>
                <li>Услуги нотариуса по внесению изменений в кадастровый реестр 所有権移転. Зависит от суммы сделки, земли, мне 127096 иен насчитали.</li>
            </ul>
            
            <p>Итого, у меня расходов по купле на....1,370,816 иен! Но тут мне барышня банковская говорит "по правилам, на подобные расходы мы можем вам выдать не более 10% от стоимости дома. Ну и пусть ваш агент нам бумажку с этими расходами отправит (да, банк еще параллельно общается с агентством недвижимости в момент одобрения ипотеки).</p>
            
            <p>Сами понимаете, 10% от 13.5 млн это 1.350.000 иен, не хватает! Это я уже успел расстроится, но потом мне агент напомнил, что я залог 500000 внёс, поэтому банк продавцу на 500000 меньше переведет. Я выдохнул на этом моменте, и вот это вся проверка цифр заняла недели две, и мне одобрили ипотеку!</p>

            <h2>Ипотечный Договор</h2>
            <p>Начался второй важный этап - ипотечный договор, где решается два важных момента. Процентная ставка 金利 и способ погашения. Начнем со второго, способов погашения два:</p>
            <ol>
                <li><strong>Одинаковый платёж каждый месяц</strong> 元利均等返済. Тело кредита и проценты по нему каждый месяц так распределяются в платеже, чтобы каждый месяц платить одну и ту же сумму. Это чуть дороже по итогу в плане переплаты за много лет (на 300 тыс где-то у меня), но зато позволяет просто гасить досрочно. Я выбрал этот вариант.</li>
                <li><strong>Стабильная сумма гашения тела кредита</strong> 元金均等返済. Здесь каждый месяц сумма платежа разная, но чем ближе к закрытию ипотеки, там платежи будут становится все меньше, потому что вы быстрее, чем в первом варианте, гасите само тело кредита быстрее, а значит проценты начисляются всё с меньшей суммы. Но вначале платёж очень высокий, и для досрочного гашения есть определенные условия.</li>
            </ol>
            
            <p>Вот <a href="https://keisan.casio.jp/exec/system/1256183644" target="_blank">здесь</a> хороший симулятор платежей, советую. Сразу еще видно, сколько всего составит переплата по ипотеке.</p>

            <h2>Хитрости с Процентной Ставкой</h2>
            <p>Главная же хитрость - это процентная ставка. Во всех рекламных памфлетах, буклетах, салфетках будут показывать низкую ставку, 0.5%, 0.8% там процента... Так вот, это показывают вам плавающую процентную ставку 変動金利, и банк ОООООЧЕНЬ хотеть вам её навязать под соусом "ну смотри какая она маленькая, такая бусечка, так мало будешь платить!".</p>
            
            <p>В чем прикол: банк пересматривает процентную ставку каждые 6 месяцев, но по закону, первые 5 лет банк не имеет права менять вам процент по ставке, пусть она и плавающая. Как самые бедные пидорасики на земле, банк не может допустить, чтобы потенциальная монеточка убежала из его маленького кармашечка, поэтому он ждёт эти 5 лет, тихонько сам себе на уме пересчитывает тебе, и если так вышло, что процентная ставка росла эти пять... Ну что ж, дружок-пирожок, извини конечно, но ты нам за пять лет тут процентов должен, но не волнуйся, мы их с тебя сейчас брать не будем... ОТДАШЬ ЕДИНОРАЗОВЫМ ПЛАТЕЖОМ ВМЕСТЕ С ПОСЛЕДНИМ ПЛАТЕЖОМ ПО ИПОТЕКЕ, ХАХАХАХАХ.</p>
            
            <p>Ну и да, вообще вот ща процентная ставка 4% стала, сорри нот сорри, увидимся через полгода, но навряд ли сильно в твою сторону мы процент поменяем через полгода кек.</p>
            
            <p>Однако, японским банкам надо отдать должное, они предлагаются другие условия, помимо просто плавающей ставки. Можно взять, например, "первые 10 лет по фиксированному проценту, а оставшиеся 10 - будет плавающая" или "первые 5 фикса, потом 15 плавающая". Есть даже финт ушами "половина суммы ипотеки по плавающей ставке, другая половина по фиксированной"!</p>
            
            <p>Я не стал экономить на ровном месте здесь и сейчас, в МЭЙКУ ДЖАПАН СТРОНГУ ЭГЭЙН я не верю, поэтому я выбрал фиксированный процент за все 20 лет. Меня попытались уговорить на плавающую, но я был непреклонен, и на 20 лет у меня 2,6% годовых.</p>

            <h2>Финальный Этап</h2>
            <p>В день Х банк перечисляет кредитные деньги на ваш личный счёт, предварительно попросив вас заполнить специальную заявку на перевод от вашего имени с этого вашего счета денег продавцу. У меня вот сегодня деньги залетели, 14.6 млн, тут же 13 млн с хвостиком улетели (там еще остатки по налогу на недвижимость 固定資産税 надо было заплатить), остальное раскидал по страховой, агенту, нотариусам....</p>

            <h2>Итоговые Расходы</h2>
            <p>Итого, кредитных денег мне перевели 14.6 млн, а сколько же все обошлось мне, считаем:</p>
            <ul>
                <li>Сам дом: 13,000,000 переводом из выданного кредита + залог 500000 наличкой из своего кармана</li>
                <li>Агентские: 511,500 иен</li>
                <li>Комиссия банка по обслуживанию ипотеки: 321,200 иен</li>
                <li>Страховка от стихийных бедствий на 5 лет: 340,100 иен</li>
                <li>Услуги нотариуса по закреплению ипотечной сделки: 70,923 иен</li>
                <li>Услуги нотариуса по внесению изменений в кадастровый реестр: 127,096 иен</li>
                <li>10000 иен на марку в договор и всякие справки личные, из своего кармана</li>
            </ul>
            <p>Всего расходов: 14,880,816 иен.</p>
            <p>Сколько будет у меня переплата банку, взяв 14.6 млн иен под 2.6% на 20 лет? 4,138,000 иен где-то. Жаба квакает, конечно, но без этих банков взять обычному человеку жильё сложно.</p>

            <h2>Заключение</h2>
            <p>Я не в восторге от идеи торчать кучу денег много лет банку, но зато я исполняю свою мечту, а мечты, наверное, всегда немного нерациональны. Надеюсь, эта статья была вам интересна и кому-то будет даже полезна!</p>
        `,
  },
};

// Constants
const CONVERSION_RATE = 6.22; // 1 JPY = 6.22 CLP
const DEFAULT_VALUES = {
  propertyPrice: 13500000,
  loanAmount: 14600000,
  loanTerm: 20,
  interestRate: 2.6,
  includeExpenses: true,
};

// Calculator functions
function calculateMortgage(principal, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfPayments = years * 12;

  if (monthlyRate === 0)
    return {
      monthlyPayment: principal / numberOfPayments,
      totalPayment: principal,
      totalInterest: 0,
    };

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
  };
}

function formatCurrency(amount, currency) {
  const formatter = new Intl.NumberFormat(
    currency === "JPY" ? "ja-JP" : "es-CL",
    {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );
  return formatter.format(amount);
}

function convertAmount(amount, fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) return amount;
  return fromCurrency === "JPY"
    ? amount * CONVERSION_RATE
    : amount / CONVERSION_RATE;
}

// Event handlers
document.addEventListener("DOMContentLoaded", () => {
  let currentLanguage = "es";
  let currentCurrency = "JPY";

  // Initialize form with default values
  function initializeForm() {
    // Property Price
    document.getElementById("propertyPrice").value =
      DEFAULT_VALUES.propertyPrice;
    document.getElementById("propertyPriceSlider").value =
      DEFAULT_VALUES.propertyPrice;
    updateSliderDisplay("propertyPrice", DEFAULT_VALUES.propertyPrice);

    // Loan Amount
    document.getElementById("loanAmount").value = DEFAULT_VALUES.loanAmount;
    document.getElementById("loanAmountSlider").value =
      DEFAULT_VALUES.loanAmount;
    updateSliderDisplay("loanAmount", DEFAULT_VALUES.loanAmount);

    // Loan Term
    document.getElementById("loanTerm").value = DEFAULT_VALUES.loanTerm;
    document.getElementById("loanTermSlider").value = DEFAULT_VALUES.loanTerm;
    updateSliderDisplay("loanTerm", DEFAULT_VALUES.loanTerm);

    // Interest Rate
    document.getElementById("interestRate").value = DEFAULT_VALUES.interestRate;
    document.getElementById("interestRateSlider").value =
      DEFAULT_VALUES.interestRate;
    updateSliderDisplay("interestRate", DEFAULT_VALUES.interestRate);

    // Include Expenses
    document.getElementById("includeExpenses").checked =
      DEFAULT_VALUES.includeExpenses;
  }

  // Language switching
  document
    .getElementById("langEs")
    .addEventListener("click", () => switchLanguage("es"));
  document
    .getElementById("langRu")
    .addEventListener("click", () => switchLanguage("ru"));

  // Currency switching
  document
    .getElementById("currJPY")
    .addEventListener("click", () => switchCurrency("JPY"));
  document
    .getElementById("currCLP")
    .addEventListener("click", () => switchCurrency("CLP"));

  // Connect sliders to their inputs
  setupSliderSync("propertyPrice");
  setupSliderSync("loanAmount");
  setupSliderSync("loanTerm");
  setupSliderSync("interestRate");

  function setupSliderSync(inputId) {
    const slider = document.getElementById(`${inputId}Slider`);
    const input = document.getElementById(inputId);
    const display = document.getElementById(`${inputId}Display`);

    // Update hidden input when slider moves
    slider.addEventListener("input", function () {
      input.value = this.value;
      updateSliderDisplay(inputId, this.value);
      updateCalculations();
    });

    // Animate value when it changes
    slider.addEventListener("change", function () {
      display.classList.add("value-change");
      setTimeout(() => {
        display.classList.remove("value-change");
      }, 500);
    });
  }

  function updateSliderDisplay(inputId, value) {
    const display = document.getElementById(`${inputId}Display`);

    if (inputId === "propertyPrice" || inputId === "loanAmount") {
      // Format currency
      const formattedValue = formatCurrency(
        convertAmount(parseFloat(value), "JPY", currentCurrency),
        currentCurrency
      );
      display.textContent = formattedValue;
    } else if (inputId === "loanTerm") {
      // Add "años" or "лет" based on language
      const years = currentLanguage === "es" ? " años" : " лет";
      display.textContent = value + years;
    } else if (inputId === "interestRate") {
      // Add percent sign
      display.textContent = value + "%";
    }
  }

  function switchLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll(".language-switcher button").forEach((btn) => {
      btn.classList.toggle("active", btn.id === `lang${lang.toUpperCase()}`);
    });
    updateUI();
    updateCalculations();
  }

  function switchCurrency(currency) {
    currentCurrency = currency;
    document.querySelectorAll(".currency-switcher button").forEach((btn) => {
      btn.classList.toggle("active", btn.id === `curr${currency}`);
    });

    // Update all value displays with new currency
    updateSliderDisplay(
      "propertyPrice",
      document.getElementById("propertyPrice").value
    );
    updateSliderDisplay(
      "loanAmount",
      document.getElementById("loanAmount").value
    );

    updateCalculations();
  }

  function updateUI() {
    const content = translations[currentLanguage];

    // Update calculator labels
    document.getElementById("calcTitle").textContent = content.calcTitle;
    document.getElementById("labelPropertyPrice").textContent =
      content.propertyPrice;
    document.getElementById("labelLoanAmount").textContent = content.loanAmount;
    document.getElementById("labelLoanTerm").textContent = content.loanTerm;
    document.getElementById("labelInterestRate").textContent =
      content.interestRate;
    document.getElementById("labelIncludeExpenses").textContent =
      content.includeExpenses;
    document.getElementById("resultsTitle").textContent = content.resultsTitle;
    document.getElementById("labelMonthlyPayment").textContent =
      content.monthlyPayment;
    document.getElementById("labelTotalPayment").textContent =
      content.totalPayment;
    document.getElementById("labelTotalInterest").textContent =
      content.totalInterest;

    // Update article content
    document.getElementById("articleContent").innerHTML = content.article;

    // Update slider displays with new language
    updateSliderDisplay("loanTerm", document.getElementById("loanTerm").value);
  }

  function updateCalculations() {
    let propertyPrice =
      parseFloat(document.getElementById("propertyPrice").value) || 0;
    let loanAmount =
      parseFloat(document.getElementById("loanAmount").value) || 0;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value) || 0;
    const interestRate =
      parseFloat(document.getElementById("interestRate").value) || 0;
    const includeExpenses = document.getElementById("includeExpenses").checked;

    // Calculate additional expenses if checkbox is checked
    if (includeExpenses) {
      const additionalExpenses = propertyPrice * 0.1; // 10% of property price
      loanAmount += additionalExpenses;
    }

    const results = calculateMortgage(loanAmount, interestRate, loanTerm);

    // Convert results to current currency
    const displayAmount = (amount) => {
      const convertedAmount = convertAmount(amount, "JPY", currentCurrency);
      return formatCurrency(convertedAmount, currentCurrency);
    };

    // Animate results when they change
    const resultElements = [
      document.getElementById("monthlyPayment"),
      document.getElementById("totalPayment"),
      document.getElementById("totalInterest"),
    ];

    resultElements.forEach((element) => {
      const oldValue = element.textContent;
      const newValue =
        element.id === "monthlyPayment"
          ? displayAmount(results.monthlyPayment)
          : element.id === "totalPayment"
          ? displayAmount(results.totalPayment)
          : displayAmount(results.totalInterest);

      if (oldValue !== newValue) {
        element.textContent = newValue;
        element.classList.add("value-change");
        setTimeout(() => {
          element.classList.remove("value-change");
        }, 500);
      }
    });
  }

  // Initialize form and calculations
  initializeForm();
  updateUI();
  updateCalculations();

  // Add event listeners for form inputs
  document
    .getElementById("includeExpenses")
    .addEventListener("change", updateCalculations);
});
