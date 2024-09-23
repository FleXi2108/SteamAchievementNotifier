export const translations = {
    global: {
        main: "Главна",
        rare: "Рядък",
        plat: "100%",
        topleft: "Горе вляво",
        topcenter: "Горе в средата",
        topright: "Горе вдясно",
        bottomleft: "Долу вляво",
        bottomcenter: "Долу в средата",
        bottomright: "Долу вдясно",
        ok: "Добре",
        preview: "Преглед",
        save: "Запазване",
        back: "Назад",
        settings: "Настройки",
        appversion: "Версия на приложението",
        image: "Изображение",
        audio: "Аудио",
        folder: "Папка",
        font: "Шрифт",
        select: "Избор",
        gametitle: "Заглавие на играта",
        congrats: "Поздравления!",
        achievementunlocked: "Отключено постижение",
        gamecomplete: "100% Завършена",
        achievementdesc: "Цъкнахте бутона за показване на тестово известие",
        gamecompletedesc: "Отключихте всички постижения!",
        defaultcustomfont: "По подразбиране (Не е избран шрифт)",
        defaultsoundfile: "По подразбиране (Не е избран файл за звук)",
        defaultsounddir: "По подразбиране (Не е избрана папка)",
        nowtracking: "В момента проследяване на постижения за:",
        nopreview: "Прегледът не е наличен за нативната операционна система",
        options: "Опции",
        resetwindow: "Нулиране на прозореца",
        show: "Показване",
        exit: "Изход",
        releasegame: "Освободи игра",
        releasegamesub: [
            `Рестартирайте процеса на работника във фона и освободете текущата игра от проследяване`,
            `Опитайте тази опция, ако наскоро сте затворили игра, но Steam все още я показва като работеща, или ако Steam Achievement Notifier все още показва, че проследява игра, която вече е била затворена`
        ],
        noupdateavailable: "Няма налични актуализации",
        latestversion: "Последната версия е инсталирана",
        missingdeps: "Липсваща зависимост",
        restartapp: "Рестартиране на приложението",
        restartappsub: [
            `Ако нещата не функционират правилно, използвайте тази опция, за да затворите и отворите отново приложението`,
            `Ако проблемът продължава след рестартиране на приложението, моля, обмислете да го сигнализирате, като използвате вградените връзки на началния екран на приложението`
        ],
        suspend: "Приоставяне",
        resume: "Възобновяване",
        new: "Ново...",
        nodata: "Няма данни",
        findappid: "Намерете AppID",
        findappidsub: [
            `Всяка игра в Steam има уникален номер, наречен <span class="hl">AppID</span>. Можете да намерите съответният AppID на всяка игра в Steam, като проверите един от следните методи:`,
            `В <span class="hl">клиента на Steam</span>, щракнете с десния бутон на мишката върху игра във вашата <span class="hl">библиотека</span> и изберете <i>Свойства</i> > <i>Актуализации</i> - AppID ще бъде изброен тук`,
            `URL адресът на страницата на <span class="hl">магазина</span> на играта - това е числото, изброено след <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Уебсайтове като <span class="hl">SteamDB</span> - секцията <span class="hl">Информация за App</span> ще изброи AppID за всяка игра`
        ],
        elemselector: "Елементи на известието",
        unlockmsg: "Съобщение за отключване",
        title: "Заглавие на постижението",
        desc: "Описание на постижението",
        hiddeniconpos: "Скрит икон",
        sshiddeniconpos: "Скрит икон",
        decorationpos: "Декорация",
        ssdecorationpos: "Декорация",
        percentpos: "Процент на рядкост",
        sspercentpos: "Процент на рядкост",
        noexe: "EXE файлът на играта не е намерен!",
        noexesub: `Изберете Опции > Освободи играта от системната лента, за да излезете`,
        webhookunlockmsg: "$user отключи постижение",
        webhookingame: "в $gamename",
        percentbadge: "Значка за процент",
        sspercentbadge: "Значка за процент",
        percentbadgepos: "Позиция на значката",
        sspercentbadgepos: "Позиция на значката",
        percentbadgecolor: "Цвят на значката",
        sspercentbadgecolor: "Цвят на значката",
        percentbadgefontsize: "Размер на значката",
        sspercentbadgefontsize: "Размер на значката",
        percentbadgeroundness: "Закръгленост на значката",
        sspercentbadgeroundness: "Закръгленост на значката",
        top: "Горе",
        bottom: "Долу"
    },
    app: {
        content: {
            game: "Няма засечена игра",
            customise: "Персонализиране",
            test: "Покажи тестово уведомление"
        }
    },
    settings: {
        language: {
            title: "Език",
            content: {
                steamlang: "Превод на постиженията на езика на Steam",
                maxsteamlangretries: "Максимален брой опити за превод"
            }
        },
        os: {
            title: "Операционна система",
            content: {
                desktop: "Създай пряк път на работния плот",
                startwin: "Стартиране при влизане в системата",
                startmin: "Започни минимизирано",
                nohwa: "Изключи хардуерно ускорение",
                litemode: "Лек режим"
            }
        },
        notifications: {
            title: "Известия",
            content: {
                rarity: "Процент на рядкостта",
                rareonly: "Само рядки",
                all: "Всички",
                off: "Изключено",
                showpercent: "Покажи процент",
                soundonly: "Само звук",
                extwin: "Известия за поточно предаване",
                audiosrc: "Аудио източник",
                notify: "Известие",
                app: "Приложение",
                nowtracking: "Показване на Известие за Проследяване",
                nowtrackingscale: "Мащаб за Проследяване",
                nowtrackingpos: "Проследяване на Позиция",
                shortcuts: "Известия за бърз достъп",
                noiconcache: "Изключване на кеша за икони",
                webhooks: "Публикувай в Discord сървър",
                webhookurl: `URL на Webhook`,
                webhookcaution: `Чрез активирането на тази опция и предоставянето на валиден Discord Webhook линк, вие се съгласявате, че разбирате, че <u>всички постижения и информация за игрите на текущия Steam потребител</u> ще бъдат публикувани в определения Discord сървър чрез предоставения Webhook линк.<br><br>Ако не желаете Steam Achievement Notifier да публикува тази информация от ваше име, моля, деактивирайте тази опция.`,
                webhooklaststatus: "Последен статус"
            }
        },
        media: {
            title: "Медия",
            content: {
                steamss: "Вземи скрийншот на Steam",
                screenshots: "Допълнителни медии",
                off: "Изключено",
                overlay: "Снимка на екрана с известия",
                monitors: "Източник на скрийншот",
                hdrmode: "HDR режим",
                ovpos: "Позиция на слоя",
                ovmatch: "Съвпадение с персонализирана позиция",
                ovx: "Хоризонтално отместване",
                ovy: "Вертикално отместване",                
                ovpath: "Път на скрийншота",
                ssdelay: "Забавяне на скрийншота",
                notifyimg: "Изображение за известие",
                imgpath: "Път на изображението"
            }
        },
        games: {
            title: "Игри",
            content: {
                linkedgames: "Свързани игри",
                exclusionlist: "Списък за изключване"
            }
        },
        accessibility: {
            title: "Достъпност",
            content: {
                noanim: "Изключи анимации на прозореца на приложението",
                noupdatedialog: "Деактивиране на диалог за актуализация",
                nvda: "Включи поддръжка за NVDA",
                tooltips: "Покажи подсказки"
            }
        },
        advanced: {
            title: "Напреднали",
            content: {
                pollrate: "Честота на Анкета",
                initdelay: "Забавяне на проследяването",
                releasedelay: "Забавяне на Пускането",
                maxretries: "Максимален Брой Опити за Обработка",
                debug: "Панел за отстраняване на грешки",
                userust: "Алтернативен режим на обработка",
                notifydebug: "Показване на Известие за Дебъгване",
                usecustomfiles: "Използване на Персонализирани Файлове на Приложението",
                showcustomfiles: "Показване на Персонализирани Файлове на Приложението"
            }
        },
        misc: {
            title: "Разни",
            content: {
                checkforupdates: "Проверка за актуализации",
                log: "Дневник на Приложението",
                reset: "Нулиране на приложението"
            }
        }
    },
    customiser: {
        preset: {
            title: "Предварителна настройка",
            content: {
                preset: "Предварителна настройка за известия",
                iconanim: "Рядко анимиран икона",
                alldetails: "Показване на всички детайли",
                usepercent: "Използване на процент",
                displaytime: "Време за показване",
                scale: "Мащаб",
                customtext: "Персонализиран текст",
                usegametitle: "Използване на заглавие на играта",
                customfont: "Персонализиран шрифт"
            }
        },
        sound: {
            title: "Звук",
            content: {
                soundmode: "Режим на звук",
                file: "Файл",
                folder: "Случаен",
                soundfile: "Аудио файл",
                sounddir: "Папка със звук",
                volume: "Сила на звука"
            }
        },
        style: {
            title: "Стил",
            content: {
                bgstyle: "Стил на фона",
                solid: "Единен цвят",
                gradient: "Градиент",
                img: "Изображение",
                gameart: "Гейм арт",
                gradientangle: "Ъгъл на градиента",
                bgimg: "Фоново изображение",
                bgimgbrightness: "Яркост",
                brightness: "Яркост",
                blur: "Замъгляване",
                roundness: "Закръгленост",
                fontsize: "Размер на шрифта",
                opacity: "Прозрачност",
                bgonly: "Само фон",
                glow: "Сияние",
                glowcolor: "Цвят",
                glowsize: "Размер",
                glowx: "Хоризонтално Отместване",
                glowy: "Вертикално Отместване",
                glowopacity: "Непрозрачност",
                glowanim: "Анимация",
                glowspeed: "Скорост",
                off: "Няма",
                pulse: "Пулс",
                rainbow: "Дъга",
                mask: "Маска",
                maskimg: "Изображение на маска",
                outline: "Контур",
                outlinecolor: "Цвят на контура",
                outlinewidth: "Ширина на контура",
                dashed: "Пунктир",
                dotted: "Точков"
            }
        },
        colors: {
            title: "Цветове",
            content: {
                primarycolor: "Основен цвят",
                secondarycolor: "Вторичен цвят",
                tertiarycolor: "Третиран цвят",
                fontcolor: "Цвят на шрифта",
                fontoutline: "Очертаване на шрифта",
                fontoutlinecolor: "Цвят на контура на шрифта",
                fontshadow: "Сянка на шрифта",
                fontshadowcolor: "Цвят на сянката на шрифта"
            }
        },
        icons: {
            title: "Икони",
            content: {
                iconroundness: "Закръгленост на иконата",
                plat: "100% Лого",
                usegameicon: "Използване на иконата на играта",
                logo: "Лого",
                decoration: "Украса",
                showdecoration: "Показване на украсата",
                rarity: "Рядкост",
                showhiddenicon: "Показване на скрита икона",
                hiddenicon: "Скрита икона",
                replacelogo: "Заменете логото"
            }
        },
        position: {
            title: "Позиция",
            content: {
                pos: "Позиция на екрана",
                usecustompos: "Използване на персонализирана позиция",
                setcustompos: "Задаване",
                resetcustompos: "Нулиране"
            }
        },
        theme: {
            title: "Тема",
            content: {
                updatetheme: "Актуализиране на Темата",
                savetheme: "Запази темата",
                sub: [
                    `Запазените <span class="hl">Потребителски теми</span> могат да бъдат избрани от менюто <span class="hl">Изберете тема</span> на началния екран.`,
                    `Уверете се, че <span class="hl">Името на темата</span> е <u>уникално</u> - име, което съвпада със съществуваща тема <u>ще презапише предишната</u>!`
                ],
                placeholder: "Име на темата",
                theme: "Тема",
                importtheme: "Импортиране на тема",
                import: "Импортиране",
                importsub: [
                    `Импортиране на <span class="hl">файл с тема</span>, създаден от потребител`,
                    `<span class="hl">Импортираните теми</span> ще бъдат заредени автоматично след успешен импорт и могат да бъдат избрани от менюто <span class="hl">Избор на тема</span>`,
                ],
                importidle: `Изберете <span class="hl">файл с тема</span> за импортиране`,
                importcopied: `Темата беше успешно копирана`,
                importrenamed: `Темата беше успешно преименувана`,
                importextracted: `Темата беше успешно извлечена`,
                importrewriting: `Пренаписване на пътищата към файловете на темата...`,
                importconverting: `Конвертиране на тема...`,
                importcreating: `Създаване на тема...`,
                importdone: `Темата беше успешно импортирана`,
                importfailed: `Грешка при импортиране на избрания файл с тема!`,
                exporttheme: "Експортиране на тема",
                export: "Експортиране",
                exporterrortitle: "Грешка при експортиране",
                exporterrorsub: [
                    "Възникна грешка при опит за експортиране на избраната тема",
                    `Опитайте да запазите текущата тема (<i>чрез <span class="hl">Запази темата</span></i>) и опитайте отново да експортирате`,
                    `Ако проблемът продължава, моля, копирайте грешката по-долу и докладвайте чрез бутоните за връзка на <span class="hl">Началния екран</span>`
                ]
            }
        }
    },
    logwin: {
        content: {
            tagline: "Ето какво се е случило от момента на стартиране на приложението в",
            copylog: "Копиране на съдържанието на регистъра"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Сигурни ли сте?</span>
                    <span>Всички предишно конфигурирани данни, <u>включително персонализациите</u>, ще бъдат нулирани до стандартни настройки.</span>
                    <span>🛑 Това не може да бъде отменено!</span>
                </div>
            `,
            reset: "Нулиране"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier се е сблъскал с проблем и трябва да бъде затворен.",
            details: "Ето детайлите за грешката:",
            sub: "Натиснете бутоните по-долу, за да докладвате проблема чрез предпочитаната си платформа.",
            report: "Докладване",
            log: "Регистър на приложението",
            exit: "Изход"
        }
    },    
    tooltips: {
        game: "Играта, за която в момента се проследяват постижения",
        usertheme: "Изберете предварително запазена тема",
        customise: "Персонализиране на известията за постижения",
        test: "Показване на тестово известие, включително всички персонализации",
        kofi: "Дарете в Ko-Fi!",
        discord: "Присъединете се към Discord!",
        github: "Докладване на проблем",
        lang: "Изберете езика на потребителския интерфейс, използван в приложението",
        steamlang: `Опит за зареждане на преводи, намиращи се в приложните файлове на Steam, за да се показва информацията за постиженията на избрания от потребителя език в клиента на Steam<br><br><span class="ttdesc">Тази опция се опитва да намери преводи в JSON файл, съхраняван в данните на приложението Steam. Ако не може да бъде намерен превод за текущото постижение, вместо това ще се покаже информацията за постижението, извлечена от Steamworks.</span>`,
        maxsteamlangretries: `Броят опити (на всеки 100ms) за намиране на валидни преводи за текущото постижение<br><br><span class="ttdesc">В момента Steam съхранява само малко количество данни за постиженията в свързания с всяка игра JSON файл. Всички постижения, които не присъстват в този файл, ще бъдат добавени след отключването на постижението.<br><br>Тъй като добавянето на нови данни може да отнеме време, увеличаването на тази стойност ще увеличи вероятността да бъдат намерени данни за превод на текущото постижение, но може също така да забави показването на известието на екрана с времето, изчислено от тази настройка.<br><br>Ако не могат да бъдат намерени валидни данни за превод за текущото постижение, преводите ще се върнат към езика, зададен в Steamworks.</span>`,
        desktop: "Превключване на прекия път до приложението на работния плот, за да го стартирате",
        startwin: "Автоматично стартиране на Steam Achievement Notifier след влизане в системата",
        startmin: "Скриване на прозореца на приложението в системния трей след стартиране, докато не се отвори",
        nohwa: `Изключване на Хардуерно Ускорение, което може да подобри производителността на системи с по-ниски ресурси или системи без посветена GPU<br><br><span class="ttdesc">Приложението ще се рестартира след активиране/деактивиране на тази опция</span>`,
        litemode: "Изключване на всички интерактивни елементи на потребителския интерфейс, като се осигурява само ограничена функционалност на приложението чрез иконата в системния трей. Може да подобри използваните от приложението ресурси",
        rarity: "Процентът, при който ще се показват известията за редки постижения. Всяко постижение с отключен процент над тази стойност ще се показва като основно известие",
        showpercent: "Показване на процента на отключване на постижението в известието за избраните типове",
        soundonly: "Изключване на известията, като се възпроизвеждат само звуци, зададени чрез персонализатора",
        extwin: "Създаване на скрит фонов прозорец, който дублира всяко известие, което в момента се показва на екрана. Този прозорец може да бъде добавен като източник за заснемане на прозорец за използване в софтуер за стрийминг, като OBS",
        audiosrc: "Изберете източник на аудио (или изключете) генериран от приложението",
        nowtracking: "Показване на известие, уведомяващо потребителя, че се проследяват постижения за игра, която се изпълнява",
        nowtrackingscale: `Задайте размера на известието за проследяване`,
        nowtrackingpos: `Задайте позицията на известието за проследяване`,
        shortcuts: "Пускане на тестово известие чрез клавишна комбинация. Клавишните комбинации могат да бъдат персонализирани за всеки тип известия",
        noiconcache: `Изключва кеширането на икони за постижения при стартиране на игрите.<br><br><span class="ttdesc">Това може значително да подобри производителността на приложението при стартиране на игрите и също така може да разреши проблеми с проследяването на игри, които имат голям брой постижения. Въпреки това, в редки случаи, изключването на кеширането на икони може да доведе до липса на икони за постижения в известията</span>`,
        steamss: "Заснемане на Steam снимка, когато се отключи постижение",
        screenshots: "Изберете типа на допълнителните медийни файлове, които да се създават, когато се показва известие",
        monitors: "Мониторът, който ще бъде заснет при правене на снимката",
        hdrmode: `Правене на снимки на екрана с метод, съвместим с монитори, използващи Висок Динамичен Обхват (HDR)`,
        ovpos: "Позицията на прозореца с известието върху снимката",
        ovmatch: "Съответствие на позицията на екрана, зададена в персонализатора, за този тип известия",
        ovpath: "Мястото, където ще бъдат запазени снимките, генерирани от тази опция",
        ssdelay: "Добавяне на забавяне от момента, в който се появява известието, до момента, в който се прави снимката",
        sspreview: "Показване на преглед на начина, по който ще изглежда снимката, когато бъде запазена",
        noanim: "Изключване на всички анимации и ефекти на преходи в прозорците на приложението",
        noupdatedialog: `Предотвратяване на автоматичното показване и фокусиране на диалога <span class="hl">Налична актуализация</span><br><br><span class="ttdesc">Диалогът все още може да бъде достъпен, като щракнете върху бутона за актуализация, когато е наличен</span>`,
        nvda: "Активиране на копирането на информация за постижението в клипборда, когато се отключи постижение, за да може да бъде прочетена от софтуер за четене на екран, като NVDA",
        tooltips: "Показване на подсказки при плъзгане на курсора върху определени елементи на потребителския интерфейс",
        pollrate: `Задаване на интервал за обновяване на данни за постижения по време на игра<br><br><span class="ttdesc">Производителността може да нарасне/намалее в зависимост от стойността или хардуерните ресурси на системата. По-високите стойности обикновено водят до по-ниско натоварване на системата, но могат да доведат до по-забавени известия</span>`,
        initdelay: `Задайте забавяне между засичането на текущото <span class="hl">AppID</span> и започването на проследяване на процеси/постижения<br><br><span class="ttdesc">Увеличаването на тази стойност може да предотврати сценарии, при които Steam не може да стартира текущата игра (поради инициализацията на приложението в Steamworks преди стартирането на играта)</span><br><br><span class="ttdesc">Алтернативно, увеличаването на тази стойност също може да се използва за заобикаляне на неправилно засичане на процеси на стартиране преди играта</span>`,
        releasedelay: `Задайте за колко време фоновият процес да изчака преди да рестартира след като текущата игра е пусната. Влияе както върху автоматичното проследяване на процеса, така и върху ръчно свързаните игри.<br><br><span class="ttdesc">Позволява по-дълъг период на Steamworks да бъде напълно освободен от приложението. Увеличаването на тази стойност може да предотврати необичайно поведение, като проследяване на вече затворена игра</span>`,
        maxretries: `Задайте максималния брой опити за свързване на работещ процес със засечен AppID. Влияе както върху автоматичното проследяване на процеса, така и върху ръчно свързаните игри.<br><br><span class="ttdesc">Опитите за свързване се извършват веднъж на всяка секунда. Ако работещ процес не е свързан с текущия AppID след този брой опити, ще бъде върнат невалиден процес. В такива случаи играта ще трябва да бъде пусната ръчно чрез Трей за Системата > Опции > Пусни Играта</span>`,
        debug: "Отворете панела за отстраняване на грешки, който показва подробна информация за проследяване на процесите",
        userust: "Използвайте алтернативна функция, базирана на Rust, за да проверите дали проследяваните игрални процеси в момента се изпълняват на системата. Когато не е отметнато, ще се използва вместо това стандартната проверка на процесите, базирана на NodeJS.",
        notifydebug: "Създаване на прозорец на DevTools за всички известия. Полезно за отстраняване на грешки и проблеми с известията",
        usecustomfiles: "Позволява зареждането на потребителски настраиваеми файлове за известия. Препоръчително е да се използва с внимание от обикновените потребители",
        showcustomfiles: "Отваряне на местоположението на потребителските файлове",
        log: "Отваряне на прозореца с приложението Log, който показва информация за дейността на процеса, предупреждения и грешки",
        reset: "Изтриване на всички конфигурационни данни и рестартиране на приложението",
        playback: "Паузиране/възобновяване на анимацията на прегледа на известието",
        replay: "Рестартиране на анимацията на прегледа на известието",
        preset: "Изберете предварително зададеното известие, което да персонализирате",
        iconanim: "Превключване на границата и анимацията на иконата за редките постижения",
        alldetails: "Показване на всички текстови елементи в известието, включително тези, които по подразбиране са скрити за това предварително зададено известие",
        usepercent: "Показване на процента на отключване на постижението, вместо стойността XP/S",
        displaytime: "Задаване на броя секунди, през които известието ще се показва",
        scale: "Увеличаване или намаляване на размера на известието",
        customtext: "Задаване на персонализирано съобщение, което да се показва в известието",
        usegametitle: "Показване на заглавието на текущата игра в известието",
        customfont: "Зареждане на персонализиран шрифт, който да се използва в известието",
        soundmode: "Изберете единичен аудио файл или случайно избран аудио файл от папка, съдържаща множество аудио файлове, когато се появи известие",
        soundfile: "Изберете аудио файл, който да се възпроизвежда, когато се появи известие",
        sounddir: "Изберете папка, от която да се избира случайно аудио файл, когато се появи известие",
        volume: "Задаване на силата на звука на аудио файла",
        preview: "Преглед на избрания аудио файл или на случайно избран аудио файл от папката",
        bgstyle: "Изберете стила на фона на известието",
        gradientangle: "Задаване на ъгъла на градиента",
        bgimg: "Зареждане на изображение, което да се използва като фон на известието",
        bgimgbrightness: "Задайте яркостта на изображението, използвано като фон на известие",
        brightness: "Задаване на яркостта на изображението на играта, използвано като фон на известието",
        blur: "Задайте нивото на замъгляване, приложено към задната част на известията",
        roundness: "Задаване на закръглеността на ръбовете на известието",
        fontsize: "Задаване на размера на шрифта, използван в известието",
        opacity: "Задаване на общата прозрачност на известието",
        bgonly: "Задаване само на прозрачността на фона на известието, като оставят другите елементи с пълна прозрачност",
        glow: "Активиране на ефект на светене, който обгръща известията",
        glowcolor: "Задайте цвета на ефекта на светене",
        glowsize: "Задайте размера на ефекта на светене",
        glowanim: "Изберете предварително зададена анимация, която да се приложи към ефекта на светене",
        glowx: "Отместете позицията на ефекта на сияние хоризонтално",
        glowy: "Отместете позицията на ефекта на сияние вертикално",
        glowopacity: "Задайте непрозрачността на ефекта на сияние",
        glowspeed: "Задайте скоростта на анимацията, приложена към ефекта на светене",
        mask: "Активиране на замаскиране на части от известията с персонализирано изображение",
        maskimg: `Зареждане на файл с изображение, който да се използва като маска<br><br><span class="ttdesc">В CSS, <code class="ttcode">mask-mode: alpha</code> работи в обратна посока на очакваното - областите с прозрачност във файла с изображение ще бъдат засенчени, а черните/сивите области ще позволят на елементите под тях да бъдат видими</span>`,
        outline: "Изберете типа контур, който да се показва около известието",
        outlinecolor: "Задайте цвета на контура около известието",
        outlinewidth: "Задайте ширината на контура около известието",
        primarycolor: "Задаване на основния цвят на известието",
        secondarycolor: "Задаване на вторичния цвят на известието",
        tertiarycolor: "Задаване на третичния цвят на известието",
        fontcolor: "Задаване на цвета на всички текстове, показвани в известието",
        fontoutline: "Добавяне на контур на всички текстове, показвани в известието",
        fontoutlinecolor: "Задаване на цвета на контура на текста",
        fontshadow: "Добавяне на сянка на всички текстове, показвани в известието",
        fontshadowcolor: "Задаване на цвета на сянката на текста",
        iconroundness: "Задаване на закръглеността на иконата на постижението/играта, показвана в известието",
        plat: "Зареждане на изображение, което да се използва като икона за 100%",
        usegameicon: "Замяна на иконата по подразбиране за известието с иконата на текущата игра",
        showhiddenicon: "Показване на изображение, което показва, че постижението е скрито в известие",
        hiddenicon: "Зареждане на файл с изображение, за да се замени иконата на скрито постижение",
        logo: "Зареждане на изображение, което да замени иконата на логото",
        decoration: "Зареждане на изображение, което да замени иконата за декорация",
        showdecoration: "Превключване на видимостта на иконата за декорация",
        replacelogo: "Заменете иконата на логото в уведомлението с избраната декорация",
        pos: "Задаване на позицията на известието на екрана",
        usecustompos: "Активиране на персонализирано позициониране за известието",
        setcustompos: "Задаване на персонализираната позиция за известието",
        resetcustompos: "Нулиране на позицията на известието до персонализираната позиция по подразбиране",
        updatetheme: "Актуализиране на текущата Тема с избраните опции за персонализация",
        savetheme: "Запазване на всички конфигурирани опции за персонализация като нова тема",
        visibilitybtn: "Превключване на видимостта на елемента в персонализирани прегледи и тестови известия",
        delbtn: "Нулиране на елемента до стойността по подразбиране",
        link: `Отвори <span class="hl">Меню за Управление на Свързани Игри</span>`,
        imgpath: "Местоположението, където ще се запазват изображенията за известия, генерирани от тази опция",
        linkedgames: `Пропускане на <span class="hl">автоматично проследяване на процеса</span> за конкретни игри в Steam<br><br><span class="ttdesc">Тази опция трябва да се използва само за много специфични сценарии. Потребителите не трябва да използват тази опция при нормални обстоятелства!</span>`,
        exclusionlist: `Предотвратяване на проследяването на постижения в конкретни игри в Steam от приложението<br><br><span class="ttdesc">Тази опция трябва да се използва само за много специфични сценарии. Потребителите не трябва да използват тази опция при нормални обстоятелства!</span>`,
        ovx: "Отместване на известието, показано на екранната снимка, хоризонтално",
        ovy: "Отместване на известието, показано на екранната снимка, вертикално",
        importtheme: `Импортиране на персонализации чрез <span class="hl">файл с тема</span>, създаден от потребител`,
        exporttheme: `Експортиране на текущо избраната <span class="hl">тема</span> за споделяне<br><br><span class="ttdesc">Преди да опитате да експортирате, моля уверете се, че желаната <span class="hl">тема</span> е избрана (чрез менюто <span class="hl">Избор на тема</span>). Също така уверете се, че персонализациите са запазени в избраната <span class="hl">тема</span> (чрез менюто <span class="hl">Запазване на тема</span>)<br><br><u>Всякакви персонализации, които все още не са запазени в текущата <span class="hl">тема</span>, няма да бъдат експортирани!</u></span>`,
        webhooks: "Използвайте URL на Webhook, за да публикувате в Discord сървър при отключване на постижение",
        webhookurl: `Задайте <span class="hl">URL на Webhook</span> за желания Discord сървър<br><br><span class="ttdesc"><span class="hl">URL на Webhook</span> се използва за публикуване в Discord сървър/канал от името на потребител или приложение. За да създадете нов Webhook за Discord сървър, потребителят трябва да има роля в желания сървър, която позволява създаването на Webhooks<br><br><u>URL на Webhook е необходим при използване на тази опция</u><br><br>Вижте официалната документация на Discord за повече информация</span>`,
        unlockmsg: "Задайте позицията на съобщението за отключване/потребителски текст в $type",
        title: "Задайте позицията на заглавието на постижението в $type",
        desc: "Задайте позицията на описанието на постижението в $type",
        notification: "известие",
        screenshot: "екранна снимка",
        percentpos: "Задайте позицията на процента на рядкост в $type",
        sspercentpos: "Задайте позицията на процента на рядкост в $type",
        hiddeniconpos: "Задайте позицията на иконата на скритото/тайното постижение в $type",
        sshiddeniconpos: "Задайте позицията на иконата на скритото/тайното постижение в $type",
        decorationpos: "Задайте позицията на елемента на декорацията в $type",
        ssdecorationpos: "Задайте позицията на елемента на декорацията в $type",
        percentbadge: "Показване на процентното отключване в значка, разположена над иконата на постижението/играта",
        sspercentbadge: "Показване на процентното отключване в значка, разположена над иконата на постижението/играта",
        percentbadgepos: "Задаване на позицията на значката",
        sspercentbadgepos: "Задаване на позицията на значката",
        percentbadgecolor: "Задаване на цвета на фона на значката",
        sspercentbadgecolor: "Задаване на цвета на фона на значката",
        percentbadgefontsize: "Задаване на размера на значката",
        sspercentbadgefontsize: "Задаване на размера на значката",
        percentbadgeroundness: "Задаване на закръглеността на значката",
        sspercentbadgeroundness: "Задаване на закръглеността на значката"
    },
    update: {
        updateavailable: "Налична е актуализация",
        sub: [
            `<span id="newversion"></span>`,
            "Налична е нова актуализация на Steam Achievement Notifier!",
            `Пълният списък с промени е достъпен на <span id="discordreleasenotes"></span> и <span id="githubreleasenotes"></span>`
        ],
        update: "Актуализиране"
    },
    linkgame: {
        content: {
            exepath: "Път на изпълнимия файл",
            managesub: [
                `Ръчно свържете <span class="hl">изпълнимия файл</span> на игра с конкретен <span class="hl">AppID</span>, или <span class="hl">разкачете</span> вече съществуващ`,
                `Steam Achievement Notifier вече няма да използва <span class="hl">автоматичното проследяване на процеса</span> за нито една от <span class="hl">свързаните игри</span> - вместо това, указаният <span class="hl">изпълним файл</span> ще бъде проследен всеки път, когато се засече съответният <span class="hl">AppID</span>`,
                `<span class="hl" id="appidhelp"><u>Как да намеря AppID на игра в Steam?</u></span>`
            ],
            linknew: "Нова свързана игра",
            linknewsub: [
                `Създайте нова връзка между <span class="hl">изпълнимия файл на игра</span> и съответният <span class="hl">AppID</span>`,
                `Веднъж създадени, връзките могат да бъдат <span class="hl">разкачени</span> чрез предходния диалог за <span class="hl">управление на свързаните игри</span>`
            ],
            link: "Свързване",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Добавяне на <span class="hl">AppID</span> на всяка игра в Steam към <span class="hl">Списък за изключване</span>`,
                `Steam Achievement Notifier няма да се опитва да проследява данни за постижения за всяка игра с добавен <span class="hl">AppID</span> към <span class="hl">Списък за изключване</span>`,
                `<span class="hl" id="appidhelp"><u>Как да намеря AppID на игра в Steam?</u></span>`
            ],
            exclusionnew: "Ново изключване",
            exclusionnewsub: [
                `Въведете <span class="hl">AppID</span>, за да го добавите към <span class="hl">Списък за изключване</span>`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Изглежда, че се опитвате да активирате опцията <span class="hl">${opt}</span>. Обаче, в Linux, снимките на екрана не могат да се активират без първо да инсталирате пакета <code class="dialogcode">${dep}</code>`,
    `Моля, изпълнете <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code>, за да инсталирате тази зависимост. Това ще гарантира, че могат да се правят снимки на екрана на това устройство`
]