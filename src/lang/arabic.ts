export const translations = {
    global: {
        main: "الرئيسية",
        rare: "نادر",
        plat: "100٪",
        topleft: "أعلى اليسار",
        topcenter: "أعلى الوسط",
        topright: "أعلى اليمين",
        bottomleft: "أسفل اليسار",
        bottomcenter: "أسفل الوسط",
        bottomright: "أسفل اليمين",
        ok: "موافق",
        preview: "معاينة",
        save: "حفظ",
        back: "رجوع",
        settings: "الإعدادات",
        appversion: "إصدار التطبيق",
        image: "صورة",
        audio: "صوت",
        folder: "مجلد",
        font: "خط",
        select: "اختيار",
        gametitle: "عنوان اللعبة",
        congrats: "مبروك!",
        achievementunlocked: "تم فتح الإنجاز",
        gamecomplete: "اللعبة مكتملة 100٪",
        achievementdesc: "انقر على زر إظهار الإخطار التجريبي",
        gamecompletedesc: "لقد فتحت جميع الإنجازات!",
        defaultcustomfont: "الافتراضي (لم يتم اختيار خط)",
        defaultsoundfile: "الافتراضي (لم يتم اختيار ملف صوتي)",
        defaultsounddir: "الافتراضي (لم يتم اختيار مجلد)",
        nowtracking: "يتم تتبع الإنجازات الآن لـ:",
        nopreview: "المعاينة غير متاحة لنظام التشغيل الأصلي",
        options: "خيارات",
        resetwindow: "إعادة تعيين النافذة",
        show: "عرض",
        exit: "خروج",
        releasegame: "إطلاق اللعبة",
        releasegamesub: [
            `أعد تشغيل عملية العامل الخلفية وأطلق اللعبة الحالية من التتبع`,
            `جرب هذا الخيار إذا كنت قد أغلقت لعبة مؤخرًا ولكن Steam لا يزال يظهر أنها تعمل، أو إذا كان Steam Achievement Notifier لا يزال يظهر كما يتبع لعبة تم إغلاقها بالفعل`
        ],
        noupdateavailable: "لا توجد تحديثات متاحة",
        latestversion: "تم تثبيت أحدث إصدار",
        missingdeps: "التبعية المفقودة",
        restartapp: "إعادة تشغيل التطبيق",
        restartappsub: [
            `إذا لم تعمل الأمور بشكل صحيح، استخدم هذا الخيار لإغلاق التطبيق وإعادة فتحه`,
            `إذا استمرت المشكلة بعد إعادة تشغيل التطبيق، يرجى النظر في الإبلاغ عنها باستخدام الروابط داخل التطبيق على شاشة الصفحة الرئيسية`
        ],
        suspend: "تعليق",
        resume: "استئناف",
        new: "جديد...",
        nodata: "لا توجد بيانات",
        findappid: "العثور على AppID",
        findappidsub: [
            `كل لعبة Steam لها رقم فريد مرتبط بها - يُسمى <span class="hl">AppID</span>. يمكنك العثور على AppID المرتبط بأي لعبة Steam عن طريق التحقق من أحد الآتي:`,
            `في <span class="hl">عميل Steam</span>، انقر بزر الماوس الأيمن على لعبة في <span class="hl">المكتبة</span> الخاصة بك وحدد <i>الخصائص</i> > <i>التحديثات</i> - سيتم سرد AppID هنا`,
            `عنوان <span class="hl">URL</span> لصفحة <span class="hl">المتجر</span> الخاصة باللعبة - سيكون الرقم المدرج بعد <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `مواقع الويب مثل <span class="hl">SteamDB</span> - سيقوم القسم <span class="hl">معلومات الأطباق</span> بسرد AppID لكل لعبة`
        ],
        noexe: "لم يتم العثور على ملف اللعبة التنفيذي!",
        noexesub: `حدد الخيارات > إصدار اللعبة من شريط النظام للخروج`,
        webhookunlockmsg: "$user فتح إنجازًا",
        webhookingame: "في $gamename",
        notconnected: "غير متصل"
    },
    app: {
        content: {
            game: "لم يتم اكتشاف لعبة",
            customise: "تخصيص",
            test: "إظهار إشعار الاختبار"
        }
    },
    settings: {
        language: {
            title: "اللغة",
            content: {
                steamlang: "ترجمة الإنجازات إلى لغة Steam",
                maxsteamlangretries: "أقصى عدد لمحاولات الترجمة"
            }
        },
        os: {
            title: "نظام التشغيل",
            content: {
                desktop: "إنشاء اختصار سطح المكتب",
                startwin: "البدء عند تسجيل الدخول",
                startmin: "البدء بحالة مصغرة",
                nohwa: "تعطيل التسارع العتادي",
                litemode: "وضع خفيف"
            }
        },
        notifications: {
            title: "الإشعارات",
            content: {
                rarity: "نسبة الندرة",
                rareonly: "ندرة فقط",
                all: "الكل",
                off: "إيقاف",
                showpercent: "إظهار النسبة المئوية",
                soundonly: "وضع الصوت فقط",
                extwin: "إشعارات البث",
                audiosrc: "مصدر الصوت",
                notify: "الإشعار",
                app: "التطبيق",
                nowtracking: "عرض إشعار التتبع",
                nowtrackingscale: "مقياس التتبع",
                nowtrackingpos: "تتبع الموقع",
                shortcuts: "اختصارات الإشعار",
                noiconcache: "تعطيل ذاكرة التخزين المؤقت للرموز",
                webhooks: "نشر في خادم ديسكورد",
                webhookurl: `عنوان URL للويب هوك`,
                webhookcaution: `بتمكين هذا الخيار وتوفير رابط ويب هوك صالح لديسكورد، فإنك توافق على أنك تفهم أن <u>جميع معلومات الإنجاز واللعبة للمستخدم الحالي لستيم</u> سيتم نشرها في خادم ديسكورد المحدد عبر رابط الويب هوك المقدم.<br><br>إذا كنت لا ترغب في أن يقوم Steam Achievement Notifier بنشر هذه المعلومات نيابة عنك، يرجى تعطيل هذا الخيار.`,
                webhooklaststatus: "آخر حالة"
            }
        },
        media: {
            title: "وسائط",
            content: {
                steamss: "التقاط لقطة شاشة Steam",
                screenshots: "وسائط إضافية",
                off: "إيقاف",
                overlay: "التقاط لقطة شاشة مع تراكب الإشعار",
                monitors: "مصدر اللقطة الشاشة",
                hdrmode: "وضع HDR",
                ovpos: "موقع التراكب",
                ovmatch: "مطابقة موقع التخصيص",
                ovx: "إزاحة أفقية",
                ovy: "إزاحة رأسية",
                ovpath: "مسار اللقطة الشاشة",
                ssdelay: "تأخير اللقطة الشاشة",
                notifyimg: "صورة الإشعار",
                imgpath: "مسار الصورة"
            }
        },
        games: {
            title: "الألعاب",
            content: {
                linkedgames: "الألعاب المرتبطة",
                themeswitch: "التبديل التلقائي للثيمات",
                exclusionlist: "قائمة الاستبعاد"
            }
        },
        accessibility: {
            title: "سهولة الوصول",
            content: {
                noanim: "تعطيل الرسوم المتحركة لنافذة التطبيق",
                noupdatedialog: "تعطيل مربع حوار التحديث",
                nvda: "تمكين دعم NVDA",
                tooltips: "إظهار تلميحات الأدوات",
                showsystrayopts: "إظهار خيارات علبة النظام"
            }
        },
        advanced: {
            title: "متقدم",
            content: {
                pollrate: "معدل الاستطلاع",
                initdelay: "تأخير التتبع",
                releasedelay: "تأخير الإصدار",
                maxretries: "أقصى عدد لإعادة المحاولة",
                debug: "لوحة التصحيح",
                userust: "نمط المعالجة البديل",
                notifydebug: "عرض إشعار أدوات التطوير",
                usecustomfiles: "استخدام ملفات التطبيق المخصصة",
                showcustomfiles: "عرض ملفات التطبيق المخصصة"
            }
        },
        misc: {
            title: "متفرقات",
            content: {
                checkforupdates: "التحقق من التحديثات",
                log: "سجل التطبيق",
                reset: "إعادة تعيين التطبيق"
            }
        }
    },    
    customiser: {
        preset: {
            title: "الإعداد المسبق",
            content: {
                preset: "التنبيه المسبق",
                iconanim: "تحريك الرمز النادر",
                alldetails: "عرض كافة التفاصيل",
                usepercent: "استخدم النسبة المئوية",
                displaytime: "وقت العرض",
                scale: "مقياس",
                customtext: "النص المخصص",
                usegametitle: "استخدام عنوان اللعبة",
                customfont: "الخط المخصص"
            }
        },
        sound: {
            title: "الصوت",
            content: {
                soundmode: "وضع الصوت",
                file: "ملف",
                folder: "عشوائي",
                soundfile: "ملف الصوت",
                sounddir: "مجلد الصوت",
                volume: "الصوت"
            }
        },
        style: {
            title: "النمط",
            content: {
                bgstyle: "نمط الخلفية",
                solid: "صلب",
                gradient: "تدرج",
                img: "صورة",
                gameart: "فن اللعبة",
                gradientangle: "زاوية التدرج",
                bgimg: "صورة الخلفية",
                bgimgbrightness: "السطوع",
                brightness: "السطوع",
                blur: "ضبابية",
                roundness: "الدوران",
                fontsize: "حجم الخط",
                opacity: "الشفافية",
                bgonly: "الخلفية فقط",
                glow: "توهج",
                glowcolor: "اللون",
                glowsize: "الحجم",
                glowx: "إزاحة أفقية",
                glowy: "إزاحة رأسية",
                glowopacity: "التعتيم",
                glowanim: "الرسوم المتحركة",
                glowspeed: "السرعة",
                off: "بلا",
                pulse: "نبض",
                rainbow: "قوس قزح",
                mask: "قناع",
                maskimg: "صورة القناع",
                outline: "الحدود",
                outlinecolor: "لون الحدود",
                outlinewidth: "عرض الحدود",
                dashed: "متقطع",
                dotted: "منقط"
            }
        },
        colors: {
            title: "الألوان",
            content: {
                primarycolor: "اللون الأساسي",
                secondarycolor: "اللون الثانوي",
                tertiarycolor: "اللون الثالثي",
                fontcolor: "لون الخط",
                fontoutline: "خط الخط",
                fontoutlinecolor: "لون خط الخط",
                fontshadow: "ظل الخط",
                fontshadowcolor: "لون ظل الخط"
            }
        },
        icons: {
            title: "الرموز",
            content: {
                iconroundness: "دوران الرمز",
                plat: "شعار 100%",
                usegameicon: "استخدام رمز اللعبة",
                logo: "الشعار",
                decoration: "زخرفة",
                showdecoration: "إظهار الزخرفة",
                rarity: "الندرة",
                showhiddenicon: "عرض الرمز المخفي",
                hiddenicon: "الرمز المخفي",
                replacelogo: "استبدال الشعار"
            }
        },
        position: {
            title: "الموضع",
            content: {
                pos: "موضع الشاشة",
                usecustompos: "استخدام موضع مخصص",
                setcustompos: "تعيين",
                resetcustompos: "إعادة تعيين"
            }
        },
        theme: {
            title: "السمة",
            content: {
                updatetheme: "تحديث الثيم",
                savetheme: "حفظ السمة",
                sub: [
                    `يمكن اختيار <span class="hl">سمات المستخدم المحفوظة</span> من قائمة <span class="hl">تحديد السمة</span> على شاشة الصفحة الرئيسية.`,
                    `تأكد من أن <span class="hl">اسم السمة</span> م <u>فريد</u> - سيتم استبدال السمة السابقة بالسمة التي تطابق الاسم!`
                ],
                placeholder: "اسم السمة",
                theme: "السمة",
                importtheme: "استيراد السمة",
                import: "استيراد",
                importsub: [
                    `استيراد <span class="hl">ملف سمة</span> أنشأه المستخدم`,
                    `<span class="hl">السمات المستوردة</span> سيتم تحميلها تلقائيًا بمجرد استيرادها بنجاح، ويمكن اختيارها من قائمة <span class="hl">اختيار السمة</span>`,
                ],
                importidle: `حدد <span class="hl">ملف سمة</span> للاستيراد`,
                importcopied: `تم نسخ السمة بنجاح`,
                importrenamed: `تم إعادة تسمية السمة بنجاح`,
                importextracted: `تم استخراج السمة بنجاح`,
                importrewriting: `إعادة كتابة مسارات ملفات السمة...`,
                importconverting: `تحويل السمة...`,
                importcreating: `إنشاء السمة...`,
                importdone: `تم استيراد السمة بنجاح`,
                importfailed: `حدث خطأ أثناء استيراد ملف السمة المحدد!`,
                exporttheme: "تصدير السمة",
                export: "تصدير",
                exporterrortitle: "خطأ في التصدير",
                exporterrorsub: [
                    "حدث خطأ أثناء محاولة تصدير السمة المحددة",
                    `حاول حفظ السمة الحالية (<i>عن طريق <span class="hl">حفظ السمة</span></i>) وحاول التصدير مرة أخرى`,
                    `إذا استمرت المشكلة، يرجى نسخ الخطأ أدناه، ثم الإبلاغ عبر أزرار الرابط في <span class="hl">شاشة البداية</span>`
                ],
                synctheme: "مزامنة الثيم",
                syncedwith: "مزامن مع",
                themeselect: "الثيم المختار"
            }
        }
    },
    logwin: {
        content: {
            tagline: "إليك ما حدث منذ بدء تشغيل التطبيق في",
            copylog: "نسخ محتويات السجل"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>هل أنت متأكد؟</span>
                    <span>سيتم إعادة تعيين جميع البيانات التي تم تكوينها مسبقًا، <u>بما في ذلك التخصيصات</u>، إلى الإعدادات الافتراضية.</span>
                    <span>🛑 لا يمكن التراجع عن هذا الإجراء!</span>
                </div>
            `,
            reset: "إعادة تعيين"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier واجه مشكلة ويحتاج إلى الإغلاق.",
            details: "إليك تفاصيل الخطأ:",
            sub: "انقر على الأزرار أدناه للإبلاغ عن هذه المشكلة عبر منصتك المفضلة.",
            report: "الإبلاغ",
            log: "سجل التطبيق",
            exit: "الخروج"
        }
    },
    tooltips: {
        game: "اللعبة التي يتم تتبع الإنجازات الخاصة بها حاليًا",
        usertheme: "حدد سمة محفوظة مسبقًا",
        customise: "تخصيص إشعارات الإنجازات",
        test: "عرض إشعار اختبار، بما في ذلك أي تخصيصات",
        kofi: "تبرع على Ko-Fi!",
        discord: "انضم على Discord!",
        github: "الإبلاغ عن مشكلة",
        lang: "حدد لغة واجهة المستخدم المستخدمة في التطبيق",
        steamlang: `محاولة تحميل الترجمات الموجودة داخل ملفات تطبيق Steam لعرض معلومات الإنجازات بلغة العميل المختارة في Steam<br><br><span class="ttdesc">يتم من خلال هذا الخيار محاولة العثور على الترجمات في ملف JSON مخزن داخل بيانات تطبيق Steam. إذا تعذر العثور على ترجمة للإنجاز الحالي، سيتم عرض معلومات الإنجاز التي تم استردادها من Steamworks بدلاً من ذلك.</span>`,
        maxsteamlangretries: `عدد المحاولات (لكل 100 مللي ثانية) لمحاولة العثور على ترجمات صالحة للإنجاز الحالي<br><br><span class="ttdesc">حاليًا، يخزن Steam كمية صغيرة فقط من بيانات الإنجازات داخل ملف JSON المرتبط بكل لعبة. سيتم إضافة أي إنجازات غير موجودة داخل هذا الملف بعد فتح الإنجاز.<br><br>نظرًا لأن إضافة بيانات جديدة قد يستغرق وقتًا، فإن زيادة هذه القيمة ستزيد من احتمال العثور على بيانات الترجمة للإنجاز الحالي، ولكنها قد تؤخر أيضًا ظهور الإشعار على الشاشة بمقدار الوقت المحسوب من خلال هذا الإعداد.<br><br>إذا تعذر العثور على بيانات ترجمة صالحة للإنجاز الحالي، فسيتم الرجوع إلى الترجمة الافتراضية المحددة في Steamworks.</span>`,
        desktop: "تبديل اختصار على سطح المكتب لتشغيل التطبيق",
        startwin: "بدء Steam Achievement Notifier تلقائيًا بعد تسجيل الدخول",
        startmin: "بعد التشغيل، إخفاء نافذة واجهة المستخدم للتطبيق حتى يتم فتحها من علبة النظام",
        nohwa: `تعطيل التسارع الأجهزة، مما قد يحسن الأداء على الأنظمة ذات الموارد المنخفضة، أو الأنظمة بدون وحدة معالجة رسومات مخصصة<br><br><span class="ttdesc">سيتم إعادة تشغيل التطبيق بعد تمكين/تعطيل هذا الخيار</span>`,
        litemode: "تعطيل جميع عناصر واجهة المستخدم التفاعلية، مع توفير وظائف محدودة فقط عبر أيقونة علبة النظام. قد يحسن استهلاك الموارد من التطبيق",
        rarity: "النسبة المئوية التي سيتم فيها تشغيل إشعارات الإنجازات النادرة. سيتم عرض أي إنجاز يتجاوز هذه القيمة كإشعار رئيسي",
        showpercent: "عرض نسبة فتح الإنجاز في الإشعار لأنواع محددة",
        soundonly: "تعطيل الإشعارات، وتشغيل الأصوات فقط المضبوطة عبر مخصص الإشعارات",
        extwin: "إنشاء نافذة خلفية مخفية تكرر أي إشعارات يتم عرضها حاليًا على الشاشة. يمكن بعد ذلك إضافة هذه النافذة كمصدر لالتقاط النافذة لاستخدامه في برامج البث مثل OBS",
        audiosrc: "حدد مصدر الصوت (أو تعطيله) الذي يتم إنشاؤه بواسطة التطبيق",
        nowtracking: "عرض إشعار يخطر المستخدم بأن الإنجازات للعبة قيد التشغيل يتم تتبعها",
        nowtrackingscale: `تعيين حجم إشعار التتبع`,
        nowtrackingpos: `تحديد موقع إشعار التتبع`,
        shortcuts: "تشغيل إشعار اختبار عبر اختصار لوحة المفاتيح. يمكن تخصيص الاختصارات لكل نوع من أنواع الإشعارات",
        noiconcache: `تعطيل تخزين ذاكرة التخزين المؤقت لرموز الإنجازات أثناء تشغيل الألعاب.<br><br><span class="ttdesc">يمكن أن يحسن ذلك بشكل كبير من أداء التطبيق عند تشغيل الألعاب، وقد يحل أيضًا مشكلات التتبع مع الألعاب التي تحتوي على عدد كبير من الإنجازات. ومع ذلك، في الحالات النادرة، قد يؤدي تعطيل ذاكرة التخزين المؤقت للرموز إلى عدم ظهور رموز الإنجازات في الإشعارات</span>`,
        steamss: "التقاط لقطة شاشة من Steam عند فتح إنجاز",
        screenshots: "حدد نوع الوسائط الإضافية التي سيتم إنشاؤها عند عرض إشعار",
        monitors: "الشاشة التي سيتم التقاطها عند التقاط لقطة الشاشة",
        hdrmode: `التقاط لقطات شاشة باستخدام طريقة متوافقة مع الشاشات التي تستخدم نطاق ديناميكي عالي (HDR)`,
        ovpos: "موضع التراكب للإشعار داخل لقطة الشاشة",
        ovmatch: "مطابقة موقع الشاشة المحدد في المخصص لهذا النوع من الإشعار",
        ovpath: "الموقع الذي سيتم حفظ لقطات الشاشة التي تم إنشاؤها بواسطة هذا الخيار",
        ssdelay: "إضافة تأخير من وقت حدوث الإشعار إلى وقت التقاط لقطة الشاشة",
        sspreview: "عرض معاينة لكيفية ظهور لقطة الشاشة عندما تتم حفظها",
        noanim: "تعطيل جميع الرسوم المتحركة للنوافذ وتأثيرات الانتقال في التطبيق",
        noupdatedialog: `منع مربع الحوار <span class="hl">التحديث المتاح</span> من الظهور والتركيز تلقائيًا<br><br><span class="ttdesc">يمكن الوصول إلى مربع الحوار بالنقر على زر التحديث عند توفره</span>`,
        nvda: "تمكين نسخ معلومات الإنجاز إلى الحافظة عند فتح إنجاز، لتكون قابلة للقراءة بواسطة برامج قارئ الشاشة، مثل NVDA",
        tooltips: "عرض تلميحات عند تحويل المؤشر فوق بعض عناصر واجهة المستخدم",
        pollrate: `تعيين فاصل تحديث بيانات الإنجازات أثناء اللعب<br><br><span class="ttdesc">قد يزداد أو ينقص الأداء اعتمادًا على القيمة أو موارد النظام. تؤدي القيم الأعلى عادة إلى تحميل نظام أقل، ولكن قد تؤدي إلى تأخير إشعارات أكثر</span>`,
        initdelay: `ضبط التأخير بين الكشف عن <span class="hl">معرّف التطبيق</span> الحالي وعندما يبدأ تتبع العمليات/الإنجازات<br><br><span class="ttdesc">زيادة هذه القيمة يمكن أن يمنع سيناريوهات حيث لا يستطيع Steam إطلاق اللعبة الحالية (بسبب بدء التطبيق استخدام Steamworks قبل إطلاق اللعبة)</span><br><br><span class="ttdesc">بدلاً من ذلك، يمكن أيضًا استخدام زيادة هذه القيمة لتجاوز الكشف الخاطئ عن عمليات التشغيل قبل اللعبة</span>`,
        releasedelay: `تعيين مدى الوقت الذي ينتظر فيه عملية العمل الخلفية لإعادة التشغيل بعد إصدار اللعبة الحالية. يؤثر على تتبع العمليات التلقائي والألعاب المرتبطة يدويًا<br><br><span class="ttdesc">يسمح بفترة زمنية أطول للتخلص الكامل من Steamworks من التطبيق. زيادة هذه القيمة يمكن أن تمنع السلوك غير العادي، مثل تتبع لعبة سُلِفَت مسبقًا</span>`,
        maxretries: `تعيين الحد الأقصى لعدد محاولات الربط بعملية تعمل بالفعل مع معرف تطبيق مكتشف. يؤثر على تتبع العمليات التلقائي والألعاب المرتبطة يدويًا<br><br><span class="ttdesc">يتم محاولة إعادة المحاولة مرة كل ثانية. إذا لم يتم ربط عملية تعمل بالفعل بمعرف التطبيق الحالي بعد هذا العدد من المحاولات، سيتم إرجاع عملية غير صالحة. في مثل هذه الحالات، ستحتاج اللعبة إلى الإصدار يدويًا عبر علبة النظام > الخيارات > إصدار اللعبة</span>`,
        debug: "افتح لوحة التصحيح، التي تعرض معلومات تتبع العملية بتفصيل",
        userust: "استخدم وظيفة بديلة مبنية على Rust للتحقق مما إذا كانت العمليات المتتبعة للعبة قيد التشغيل حاليًا على النظام. عند عدم التحقق، سيتم استخدام التحقق الافتراضي المعتمد على NodeJS بدلاً من ذلك.",
        notifydebug: "إنشاء نافذة أدوات المطور لجميع الإشعارات. مفيدة لتصحيح أخطاء / مشاكل الإشعار",
        usecustomfiles: "يتيح التنبيهات تحميل ملفات قابلة للتخصيص من قبل المستخدم. يُنصح بالحذر للمستخدمين العاديين",
        showcustomfiles: "فتح موقع الملفات المخصصة",
        log: "فتح نافذة سجل التطبيق، التي تعرض معلومات حول نشاط العملية، والتحذيرات والأخطاء",
        reset: "إزالة جميع بيانات التكوين وإعادة تشغيل التطبيق",
        playback: "إيقاف / استئناف تشغيل الرسوم المتحركة لمعاينة الإشعار",
        replay: "إعادة تشغيل الرسوم المتحركة لمعاينة الإشعار",
        preset: "حدد الإعداد المسبق للإشعار للتخصيص",
        iconanim: "تبديل حدود الرمز النادر والرسوم المتحركة",
        alldetails: "عرض كافة العناصر النصية داخل الإشعار، بما في ذلك تلك المخفية افتراضيًا لهذا الإعداد المسبق",
        usepercent: "عرض نسبة فتح الإنجاز بدلاً من قيمة الخبرة / ثانية",
        displaytime: "تعيين عدد الثواني التي سيتم عرض الإشعار فيها",
        scale: "زيادة أو تقليل حجم الإشعار",
        customtext: "تعيين رسالة مخصصة لتظهر ضمن الإشعار",
        usegametitle: "عرض عنوان اللعبة الحالية ضمن الإشعار",
        customfont: "تحميل خط مخصص لاستخدامه ضمن الإشعار",
        soundmode: "حدد إما ملف صوتي واحد، أو ملف صوتي مختار عشوائيًا من داخل مجلد يحتوي على عدة ملفات صوتية عند حدوث إشعار",
        soundfile: "تحديد ملف صوتي لتشغيله عند حدوث إشعار",
        sounddir: "حدد مجلدًا منه سيتم تحديد ملف صوتي بشكل عشوائي عند حدوث إشعار",
        volume: "تعيين مستوى الصوت للتشغيل للملف الصوتي",
        preview: "معاينة الملف الصوتي المحدد، أو ملف صوتي محدد عشوائيًا من المجلد",
        bgstyle: "حدد النمط لخلفية الإشعار",
        gradientangle: "تعيين زاوية التدرج",
        bgimg: "تحميل ملف صورة لاستخدامه كخلفية للإشعار",
        bgimgbrightness: "تعيين سطوع الصورة المستخدمة كخلفية الإشعار",
        brightness: "تعيين سطوع فن اللعبة المستخدم كخلفية للإشعار",
        blur: "تعيين مستوى الضبابية المطبقة على خلفية الإشعار",
        roundness: "تعيين الدوران لحواف الإشعار",
        fontsize: "تعيين حجم الخط المستخدم في الإشعار",
        opacity: "تعيين شفافية الإشعار بشكل عام",
        bgonly: "تعيين الشفافية فقط لخلفية الإشعار، مع الاحتفاظ ببقية العناصر على شفافية كاملة",
        glow: "تمكين تأثير السطوع الذي يحيط بالإشعار",
        glowcolor: "تعيين لون تأثير السطوع",
        glowsize: "تعيين حجم تأثير السطوع",
        glowx: "إزاحة موقع تأثير التوهج أفقياً",
        glowy: "إزاحة موقع تأثير التوهج رأسياً",
        glowopacity: "تعيين تعتيم تأثير التوهج",
        glowanim: "تحديد رسم متحرك مُعدّ مسبقًا لتطبيقه على تأثير السطوع",
        glowspeed: "تعيين سرعة الرسم المتحرك المطبق على تأثير السطوع",
        mask: "تمكين تقنية الإخفاء لأجزاء من الإشعار باستخدام صورة مخصصة",
        maskimg: `تحميل ملف صورة لاستخدامه كإخفاء<br><br><span class="ttdesc">في CSS، <code class="ttcode">mask-mode: alpha</code> تعمل بالطريقة المعاكسة لما يتوقع عادة - ستُخفى مناطق الشفافية في ملف الصورة، وستسمح مناطق اللون الأسود / الرمادي بظهور العناصر أدناه</span>`,
        outline: "اختر نوع الحدود التي ستظهر حول الإشعار",
        outlinecolor: "حدد لون الحدود حول الإشعار",
        outlinewidth: "حدد عرض الحدود حول الإشعار",
        primarycolor: "تعيين اللون الأساسي للإشعار",
        secondarycolor: "تعيين اللون الثانوي للإشعار",
        tertiarycolor: "تعيين اللون الثالثي للإشعار",
        fontcolor: "تعيين لون النص المعروض ضمن الإشعار",
        fontoutline: "إضافة حدود لجميع النصوص المعروضة ضمن الإشعار",
        fontoutlinecolor: "تعيين لون حدود النص",
        fontshadow: "إضافة ظل لجميع النصوص المعروضة ضمن الإشعار",
        fontshadowcolor: "تعيين لون ظل النص",
        iconroundness: "تعيين الدوران لرمز الإنجاز / اللعبة المعروض ضمن الإشعار",
        plat: "تحميل ملف صورة لاستخدامه كرمز 100%",
        usegameicon: "استبدال الرمز الافتراضي للإشعار برمز اللعبة الحالية",
        showhiddenicon: "عرض صورة تشير إلى أن الإنجاز مخفي في الإشعار",
        hiddenicon: "تحميل ملف صورة لاستبدال رمز الإنجاز المخفي",
        logo: "تحميل ملف صورة لاستبدال رمز الشعار",
        decoration: "تحميل ملف صورة لاستبدال رمز الزخرفة",
        showdecoration: "تبديل رؤية رمز الزخرفة",
        replacelogo: "استبدال أيقونة الشعار في الإشعار بالزخرفة المحددة",
        pos: "تعيين موضع الإشعار على الشاشة",
        usecustompos: "تمكين التمرير المخصص للإشعار",
        setcustompos: "تعيين الموضع المخصص للإشعار",
        resetcustompos: "إعادة تعيين موضع الإشعار إلى الموضع المخصص الافتراضي",
        updatetheme: "تحديث الثيم الحالي مع الخيارات المخصصة المختارة",
        savetheme: "حفظ كل الخيارات المكونة للتخصيص كسمة جديدة",
        visibilitybtn: "تبديل رؤية العنصر في المعاينات المخصصة والإشعارات التجريبية",
        delbtn: "إعادة تعيين العنصر إلى الافتراضي",
        imgpath: "الموقع الذي ستحفظ فيه صور الإشعارات التي تم إنشاؤها بهذا الخيار",
        checkforupdates: `تحقق مما إذا كان هناك إصدار تطبيق جديد قد تم إصداره على GitHub. إذا كان هناك تحديث متاح، سيتم تنزيله وتثبيته تلقائيًا بمجرد تأكيده عبر نافذة <span class="hl">تحديث متاح</span>`,
        linkedgames: `تخطي <span class="hl">تتبع العملية التلقائية</span> لألعاب Steam محددة<br><br><span class="ttdesc">يجب استخدام هذا الخيار فقط لحالات محددة جدًا. يجب ألا يحتاج المستخدمون إلى استخدام هذا الخيار في الظروف العادية!</span>`,
        exclusionlist: `منع تتبع الإنجازات في ألعاب Steam محددة بواسطة التطبيق<br><br><span class="ttdesc">يجب استخدام هذا الخيار فقط لحالات محددة جدًا. يجب ألا يحتاج المستخدمون إلى استخدام هذا الخيار في الظروف العادية!</span>`,
        ovx: "إزاحة الإشعار المعروض في لقطة الشاشة أفقيًا",
        ovy: "إزاحة الإشعار المعروض في لقطة الشاشة عموديًا",
        importtheme: `استيراد التخصيصات عبر <span class="hl">ملف سمة</span> أنشأه المستخدم`,
        exporttheme: `تصدير <span class="hl">السمة</span> المحددة حاليًا للمشاركة<br><br><span class="ttdesc">قبل محاولة التصدير، يرجى التأكد من اختيار <span class="hl">السمة</span> المطلوبة (من قائمة <span class="hl">اختيار السمة</span>). يرجى أيضًا التأكد من حفظ التخصيصات على <span class="hl">السمة</span> المحددة (من قائمة <span class="hl">حفظ السمة</span>)<br><br><u>أي تخصيصات لم يتم حفظها بعد على <span class="hl">السمة</span> الحالية لن يتم تصديرها!</u></span>`,
        webhooks: "استخدم عنوان ويب هوك لنشره في خادم ديسكورد كلما تم فتح إنجاز",
        webhookurl: `قم بتعيين <span class="hl">عنوان URL للويب هوك</span> للخادم المطلوب<br><br><span class="ttdesc">يستخدم <span class="hl">عنوان URL للويب هوك</span> للنشر في خادم/قناة ديسكورد نيابة عن المستخدم أو التطبيق. لتكوين ويب هوك جديد لخادم ديسكورد، يجب أن يكون لدى المستخدم دور داخل الخادم المطلوب يسمح بإنشاء ويب هوك<br><br><u>عنوان URL للويب هوك مطلوب عند استخدام هذا الخيار</u><br><br>يرجى الرجوع إلى وثائق ديسكورد الرسمية لمزيد من المعلومات</span>`,
        unlockmsg: "حدد موضع رسالة الفتح/النص المخصص داخل $type",
        title: "حدد موضع عنوان الإنجاز داخل $type",
        desc: "حدد موضع وصف الإنجاز داخل $type",
        notification: "الإشعار",
        screenshot: "لقطة الشاشة",
        percentpos: "حدد موضع نسبة الندرة داخل $type",
        sspercentpos: "حدد موضع نسبة الندرة داخل $type",
        hiddeniconpos: "حدد موضع رمز الإنجاز المخفي/السري داخل $type",
        sshiddeniconpos: "حدد موضع رمز الإنجاز المخفي/السري داخل $type",
        decorationpos: "حدد موضع عنصر الزخرفة داخل $type",
        ssdecorationpos: "حدد موضع عنصر الزخرفة داخل $type",
        percentbadge: "عرض النسبة المئوية للفتح داخل شارة موضوعة فوق أيقونة الإنجاز/اللعبة",
        sspercentbadge: "عرض النسبة المئوية للفتح داخل شارة موضوعة فوق أيقونة الإنجاز/اللعبة",
        percentbadgepos: "تحديد موقع الشارة",
        sspercentbadgepos: "تحديد موقع الشارة",
        percentbadgecolor: "تحديد لون خلفية الشارة",
        sspercentbadgecolor: "تحديد لون خلفية الشارة",
        percentbadgefontcolor: "حدد لون خط الشارة",
        sspercentbadgefontcolor: "حدد لون خط الشارة",
        percentbadgefontsize: "تحديد حجم الشارة",
        sspercentbadgefontsize: "تحديد حجم الشارة",
        percentbadgeroundness: "تحديد استدارة الشارة",
        sspercentbadgeroundness: "تحديد استدارة الشارة",
        percentbadgex: "إزاحة موضع عنصر الشارة أفقياً",
        sspercentbadgex: "إزاحة موضع عنصر الشارة أفقياً",
        percentbadgey: "إزاحة موضع عنصر الشارة عمودياً",
        sspercentbadgey: "إزاحة موضع عنصر الشارة عمودياً",
        percentbadgeimg: "عرض أيقونة بناءً على النسبة",
        sspercentbadgeimg: "عرض أيقونة بناءً على النسبة",
        percentbadgeimgbronze: "أيقونة الشارة التي تُعرض عندما تكون نسبة الفتح > 50%",
        sspercentbadgeimgbronze: "أيقونة الشارة التي تُعرض عندما تكون نسبة الفتح > 50%",
        percentbadgeimgsilver: "أيقونة الشارة التي تُعرض عندما تكون نسبة الفتح < 50% و > $rarity",
        sspercentbadgeimgsilver: "أيقونة الشارة التي تُعرض عندما تكون نسبة الفتح < 50% و > $rarity",
        percentbadgeimggold: "أيقونة الشارة التي تُعرض عندما تكون نسبة الفتح < $rarity",
        sspercentbadgeimggold: "أيقونة الشارة التي تُعرض عندما تكون نسبة الفتح < $rarity",
        resetpbimgs: "إعادة تعيين جميع أيقونات الشارة إلى الافتراضي",
        elemsmatch: `مطابقة إعدادات عناصر الإشعارات المضبوطة في المخصص لهذا النوع من الإشعارات<br><br><span class="ttdesc">لا يمكن لبعض الإعدادات المسبقة للإشعارات مطابقة إعدادات المخصص بشكل كامل، بسبب الاختلافات بين إشعارات الشاشة والإشعارات المستندة إلى اللقطات</span>`,
        themeswitch: `التبديل تلقائيًا إلى أي <span class="hl">ثيم</span> محفوظ عند اكتشاف لعبة معينة`,
        userthemesync: `مزامنة التخصيصات في <span class="hl">الثيم</span> المحدد لجميع أنواع الإشعارات الأخرى`,
        showsystrayopts: `عرض جميع الخيارات الموجودة عادةً تحت <span class="hl">علبة النظام</span> > <span class="hl">الخيارات</span> في <span class="hl">الإعدادات</span> > <span class="hl">متنوعة</span>`
    },
    update: {
        updateavailable: "تحديث متاح",
        sub: [
            `<span id="newversion"></span>`,
            "توجد تحديث جديد لـ Steam Achievement Notifier!",
            `تتوفر ملاحظات الإصدار الكاملة على <span id="discordreleasenotes"></span> و <span id="githubreleasenotes"></span>`
        ],
        update: "تحديث"
    },
    linkgame: {
        content: {
            exepath: "مسار التنفيذ",
            managesub: [
                `ربط ملف تنفيذ لعبة يدويًا بـ <span class="hl">AppID</span> محدد، أو <span class="hl">إلغاء الربط</span> للملف الموجود بالفعل`,
                `لن يستخدم Steam Achievement Notifier تتبع العملية <span class="hl">التلقائي</span> لأي <span class="hl">الألعاب المرتبطة</span> - بدلاً من ذلك، سيتم تتبع الملف التنفيذي المحدد عندما يتم الكشف عن <span class="hl">AppID</span> المقترن`,
                `<span class="hl" id="appidhelp"><u>كيف يمكنني العثور على AppID لعبة Steam؟</u></span>`
            ],
            linknew: "لعبة جديدة مرتبطة",
            linknewsub: [
                `إنشاء رابط جديد بين <span class="hl">ملف تنفيذ اللعبة</span> والـ <span class="hl">AppID</span> المرتبط به`,
                `بمجرد الإنشاء، يمكن <span class="hl">إلغاء الربط</span> عبر الحوار السابق <span class="hl">إدارة الألعاب المرتبطة</span>`
            ],
            link: "ربط",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `أضف <span class="hl">AppID</span> لأي لعبة Steam إلى <span class="hl">قائمة الاستبعاد</span>`,
                `لن يحاول Steam Achievement Notifier تتبع بيانات الإنجازات لأي <span class="hl">AppID</span> لعبة تمت إضافتها إلى <span class="hl">قائمة الاستبعاد</span>`,
                `<span class="hl" id="appidhelp"><u>كيف يمكنني العثور على AppID لعبة Steam؟</u></span>`
            ],
            exclusionnew: "استبعاد جديد",
            exclusionnewsub: [
                `أدخل <span class="hl">AppID</span> لإضافته إلى <span class="hl">قائمة الاستبعاد</span>`
            ]
        }
    },
    notificationelems: {
        title: "عناصر الإشعار",
        content: {
            unlockmsg: "رسالة الفتح",
            title: "عنوان الإنجاز",
            desc: "وصف الإنجاز",
            hiddeniconpos: "رمز مخفي",
            sshiddeniconpos: "رمز مخفي",
            decorationpos: "زخرفة",
            ssdecorationpos: "زخرفة",
            percentpos: "نسبة الندرة",
            sspercentpos: "نسبة الندرة",
            percentbadge: "شارة النسبة المئوية",
            sspercentbadge: "شارة النسبة المئوية",
            percentbadgepos: "موقع الشارة",
            sspercentbadgepos: "موقع الشارة",
            percentbadgecolor: "لون الشارة",
            sspercentbadgecolor: "لون الشارة",
            percentbadgefontcolor: "لون خط الشارة",
            sspercentbadgefontcolor: "لون خط الشارة",
            percentbadgefontsize: "حجم الشارة",
            sspercentbadgefontsize: "حجم الشارة",
            percentbadgeroundness: "استدارة الشارة",
            sspercentbadgeroundness: "استدارة الشارة",
            percentbadgex: "إزاحة أفقية",
            sspercentbadgex: "إزاحة أفقية",
            percentbadgey: "إزاحة عمودية",
            sspercentbadgey: "إزاحة عمودية",
            percentbadgeimg: "استخدام أيقونة",
            sspercentbadgeimg: "استخدام أيقونة",
            percentbadgeimgbronze: "الندرة: > 50%",
            sspercentbadgeimgbronze: "الندرة: > 50%",
            percentbadgeimgsilver: "الندرة: < 50% و > $rarity%",
            sspercentbadgeimgsilver: "الندرة: < 50% و > $rarity%",
            percentbadgeimggold: "الندرة: < $rarity%",
            sspercentbadgeimggold: "الندرة: < $rarity%",
            resetpbimgs: "إعادة تعيين أيقونات الشارة",
            elemsmatch: "مطابقة إعدادات المخصص"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `أضف <span class="hl">AppID</span> لأي لعبة للتبديل تلقائيًا إلى <span class="hl">الثيمات</span> عند اكتشافها`,
                `يمكن اختيار أي <span class="hl">ثيم</span> محفوظ لكل نوع من الإشعارات، بالإضافة إلى الشاشة المطلوبة لاستخدامها كمصدر <span class="hl">للقطة الشاشة</span>`,
                `<span class="hl" id="appidhelp"><u>كيف أجد معرف تطبيق لعبة Steam؟</u></span>`
            ],
            themeswitchnew: "تبديل تلقائي جديد",
            themeswitchnewsub: [
                `أدخل <span class="hl">AppID</span> الخاص باللعبة، بالإضافة إلى الشاشة المطلوبة لاستخدامها كمصدر <span class="hl">للقطة الشاشة</span>`,
                `اختر أي <span class="hl">ثيم</span> للتبديل إليه لكل نوع من الإشعارات عند اكتشاف <span class="hl">AppID</span> الخاص بهذه اللعبة`
            ],
            themes: "الثيمات",
            src: "مصدر لقطة الشاشة",
            themedeleted: "تم حذف السمة"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `يبدو أنك تحاول تمكين خيار <span class="hl">${opt}</span>. ومع ذلك، على نظام لينكس، لا يمكن تمكين لقطات الشاشة دون تثبيت حزمة <code class="dialogcode">${dep}</code> أولاً`,
    `يرجى تشغيل <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> لتثبيت هذه التبعية. سيساعد ذلك في التأكد من إمكانية التقاط لقطات الشاشة على هذا الجهاز`
]