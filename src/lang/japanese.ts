export const translations = {
    global: {
        main: "メイン",
        rare: "レア",
        plat: "100%",
        test: "テスト通知",
        topleft: "左上",
        topcenter: "上中央",
        topright: "右上",
        bottomleft: "左下",
        bottomcenter: "下中央",
        bottomright: "右下",
        ok: "OK",
        preview: "プレビュー",
        save: "保存",
        back: "戻る",
        settings: "設定",
        appversion: "アプリのバージョン",
        image: "画像",
        audio: "オーディオ",
        folder: "フォルダ",
        font: "フォント",
        select: "選択",
        gametitle: "ゲームのタイトル",
        congrats: "おめでとうございます！",
        achievementunlocked: "実績が解除されました",
        gamecomplete: "100% 完了",
        achievementdesc: "テスト通知ボタンをクリックしました",
        gamecompletedesc: "すべての実績を解除しました！",
        defaultcustomfont: "デフォルト（フォントが選択されていません）",
        defaultsoundfile: "デフォルト（ファイルが選択されていません）",
        defaultsounddir: "デフォルト（フォルダが選択されていません）",
        nowtracking: "現在の実績のトラッキング：",
        nopreview: "ネイティブOSではプレビューを利用できません",
        options: "オプション",
        resetwindow: "ウィンドウをリセット",
        show: "表示",
        exit: "終了",
        releasegame: "ゲームのリリース",
        releasegamesub: [
            `バックグラウンドのWorkerプロセスを再起動し、現在のゲームの追跡を解除します`,
            `最近ゲームを閉じたがSteamがまだ実行中と表示されている場合、またはSteam Achievement Notifierがすでに閉じられたゲームの追跡をまだ表示している場合は、このオプションを試してみてください`
        ],
        noupdateavailable: "利用可能な更新はありません",
        latestversion: "最新バージョンがインストールされています",
        missingdeps: "依存関係が不足しています",
        restartapp: "アプリを再起動する",
        restartappsub: [
            `もし何かが正常に動作していない場合は、このオプションを使ってアプリを閉じて再度開いてください`,
            `アプリを再起動しても問題が解決しない場合は、ホーム画面のアプリ内リンクを使用して報告してください`
        ],
        suspend: "一時停止",
        resume: "再開",
        new: "新規...",
        nodata: "データがありません",
        findappid: "AppIDを検索",
        findappidsub: [
            `各Steamゲームには固有の番号があります - これを <span class="hl">AppID</span> と呼びます。任意のSteamゲームの関連するAppIDを見つけるには、次のいずれかを確認してください：`,
            ` <span class="hl">Steamクライアント</span> で、<span class="hl">ライブラリ</span>内のゲームを右クリックし、<i>プロパティ</i> > <i>更新</i> を選択します - ここにAppIDがリストされます`,
            `ゲームの <span class="hl">ストアページ</span> の <span class="hl">URL</span> - <span class="hl">app/</span> の後にリストされる番号です： <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `<span class="hl">SteamDB</span> のようなウェブサイト - 各ゲームのAppIDが <span class="hl">App Info</span> セクションにリストされます`
        ],
        noexe: "ゲームのEXEファイルが見つかりません！",
        noexesub: "詳細についてはここをクリックしてください",
        noexedialogsub: [
            `Steam Achievement Notifierは、このゲームの実行可能ファイルを自動的に見つけることができませんでした。ゲームを「リリース」するためには、ゲームの実行可能ファイルの場所が必要です`,
            `ゲームを手動でリリースするには、<i>右クリック</i>して、<span class="hl">システムトレイアイコン</span> > <span class="hl">オプション</span> > <span class="hl">ゲームをリリース</span>を選択するか、<span class="hl">ゲームリリースショートカット</span>を使用してください`,
            `または、下の<span class="hl">リンク</span>ボタンをクリックして、現在フォーカスされているウィンドウに関連する実行可能ファイルを<span class="hl">リンクされたゲーム</span>メニューに追加してください`,
            `<span class="hl help" id="linkgamehelp"><u>リンクボタンをクリックするとどうなりますか？</u></span>`
        ],
        linkgamehelp: "ウィンドウを通じてゲームをリンク",
        linkgamehelpsub: [
            `<span class="hl">リンク</span>ボタンをクリックすると、現在フォーカスされているウィンドウの情報を使用して、<span class="hl">設定</span> > <span class="hl">リンクされたゲーム</span>メニューに新しいエントリが自動的に追加されます。`,
            `<span class="hl">リンク</span>ボタンをクリックすると、5秒のタイマーが始まります`,
            `タイマーが終了する前に、ゲームウィンドウにフォーカスを合わせてください`,
            `タイマーが終了すると、現在の<span class="hl">AppID</span>の新しいエントリが、フォーカスされたウィンドウの実行可能ファイルを使用して、<span class="hl">設定</span> > <span class="hl">リンクされたゲーム</span>メニューに追加されます`,
            `再試行が必要な場合は、<span class="hl">設定</span> > <span class="hl">リンクされたゲーム</span>からエントリを削除し、<span id="linkhelpunlink"></span>ボタンをクリックしてください`
        ],
        addlinkfailed: "ウィンドウのリンクに失敗しました",
        addlinkfailedsub: `再試行するには、<span class="hl">リンク</span>ボタンをクリックしてください`,
        webhookunlockmsg: "$user がアチーブメントを解除しました",
        webhookunlockmsgplat: "$user がすべての実績を解除しました",
        webhookingame: "$gamename で",
        notconnected: "接続されていません"
    },
    app: {
        content: {
            game: "ゲームが検出されません",
            customise: "カスタマイズ",
            test: "テスト通知を表示"
        }
    },
    settings: {
        language: {
            title: "言語",
            content: {
                steamlang: "Steamの言語に成果を翻訳する",
                maxsteamlangretries: "最大翻訳試行回数"
            }
        },
        os: {
            title: "オペレーティングシステム",
            content: {
                desktop: "デスクトップショートカットの作成",
                startwin: "ログオン時に開始",
                startmin: "最小化して開始",
                nohwa: "ハードウェアアクセラレーションを無効にする",
                litemode: "ライトモード"
            }
        },
        notifications: {
            title: "通知",
            content: {
                rarity: "レア度の割合",
                rareonly: "レアのみ",
                all: "すべて",
                off: "オフ",
                showpercent: "パーセンテージを表示",
                soundonly: "サウンドのみ",
                nowtracking: "トラッキング通知を表示する",
                nowtrackingscale: "トラッキングスケール",
                nowtrackingpos: "追跡位置",
                shortcuts: "通知ショートカット",
                noiconcache: "アイコンキャッシュの無効化",
                webhooks: "Discordサーバーに投稿",
                webhooktypes: "Webhookの種類",
                webhookurl: `Webhook URL`,
                webhookcaution: `このオプションを有効にし、正しいDiscord Webhookリンクを提供することで、<u>現在のSteamユーザーのすべてのアチーブメントおよびゲーム情報</u>が指定されたDiscordサーバーにWebhookリンクを通じて投稿されることを理解していることに同意します。<br><br>Steam Achievement Notifierがあなたの代わりにこの情報を投稿することを望まない場合は、このオプションを無効にしてください。`,
                webhooklaststatus: "最後のステータス",
                webhookspoilers: `ネタバレタグを追加`
            }
        },
        games: {
            title: "ゲーム",
            content: {
                linkedgames: "リンクされたゲーム",
                themeswitch: "テーマを自動切替",
                exclusionlist: "除外リスト"
            }
        },
        media: {
            title: "メディア",
            content: {
                steamss: "Steamスクリーンショットを撮る",
                screenshots: "追加のメディア",
                off: "オフ",
                overlay: "通知オーバーレイ付きスクリーンショット",
                monitors: "スクリーンショットのソース",
                hdrmode: "HDRモード",
                ovpos: "オーバーレイの位置",
                ovmatch: "カスタマイズ位置と一致",
                ovx: "水平オフセット",
                ovy: "垂直オフセット",                
                ovpath: "スクリーンショットのパス",
                ssdelay: "スクリーンショットの遅延",
                notifyimg: "通知画像",
                imgpath: "画像のパス"
            }
        },
        streaming: {
            title: "ストリーミング",
            content: {
                extwin: "ストリーム通知",
                extwinframerate: "フレームレート",
                extwinshow: "ウィンドウを表示",
                audiosrc: "オーディオソース",
                notify: "通知",
                app: "アプリ",
                off: "ミュート",
                statwin: "実績統計ウィンドウ",
                statwinaot: "常に最前面",
                noachievements: "表示する実績はありません",
                startgame: "実績を表示するにはゲームを開始してください！",
                max: "最大",
                custom: "カスタム...",
                statwinshortcut: "オーバーレイのショートカット",
            }
        },
        accessibility: {
            title: "アクセシビリティ",
            content: {
                noanim: "アプリウィンドウのアニメーションを無効にする",
                noupdatedialog: "更新ダイアログを無効にする",
                nvda: "NVDAサポートを有効にする",
                tooltips: "ツールチップを表示",
                showsystrayopts: "システムトレイオプションを表示",
                releaseshortcut: "ゲームリリースショートカット"
            }
        },
        advanced: {
            title: "高度な設定",
            content: {
                pollrate: "ポーリングレート",
                initdelay: "トラッキング遅延",
                releasedelay: "リリース遅延",
                maxretries: "最大リトライ回数",
                debug: "デバッグパネル",
                userust: "代替処理モード",
                notifydebug: "デバッグ通知の表示",
                usecustomfiles: "カスタムアプリファイルの使用",
                showcustomfiles: "カスタムアプリファイルの表示"
            }
        },        
        misc: {
            title: "その他",
            content: {
                checkforupdates: "更新を確認",
                log: "アプリケーションログ",
                reset: "アプリをリセット"
            }
        }
    },    
    customiser: {
        preset: {
            title: "プリセット",
            content: {
                preset: "通知プリセット",
                iconanim: "レアアイコンアニメーション",
                alldetails: "全詳細表示",
                usepercent: "パーセンテージを使用",
                displaytime: "表示時間",
                scale: "スケール",
                customtext: "カスタムテキスト",
                usegametitle: "ゲームタイトルを使用",
                customfont: "カスタムフォント"
            }
        },
        sound: {
            title: "サウンド",
            content: {
                soundmode: "サウンドモード",
                file: "ファイル",
                folder: "ランダム",
                soundfile: "サウンドファイル",
                sounddir: "サウンドフォルダ",
                volume: "音量"
            }
        },
        style: {
            title: "スタイル",
            content: {
                bgstyle: "背景スタイル",
                solid: "ソリッド",
                gradient: "グラデーション",
                img: "画像",
                gameart: "ゲームアート",
                gradientangle: "グラデーション角度",
                bgimg: "背景画像",
                bgimgbrightness: "明るさ",
                brightness: "明るさ",
                blur: "ぼかし",
                roundness: "丸み",
                fontsize: "フォントサイズ",
                opacity: "不透明度",
                bgonly: "背景のみ",
                glow: "発光",
                glowcolor: "色",
                glowsize: "サイズ",
                glowx: "水平オフセット",
                glowy: "垂直オフセット",
                glowopacity: "不透明度",
                glowanim: "アニメーション",
                glowspeed: "速度",
                off: "なし",
                pulse: "パルス",
                rainbow: "虹",
                mask: "マスク",
                maskimg: "マスク画像",
                outline: "アウトライン",
                outlinecolor: "アウトラインの色",
                outlinewidth: "アウトラインの幅",
                dashed: "破線",
                dotted: "点線"
            }
        },
        colors: {
            title: "色",
            content: {
                primarycolor: "プライマリカラー",
                secondarycolor: "セカンダリカラー",
                tertiarycolor: "第三色",
                fontcolor: "フォントカラー",
                fontoutline: "フォントアウトライン",
                fontoutlinecolor: "フォントアウトラインカラー",
                fontshadow: "フォントシャドウ",
                fontshadowcolor: "フォントシャドウカラー"
            }
        },
        icons: {
            title: "アイコン",
            content: {
                iconroundness: "アイコンの角丸",
                plat: "100％ロゴ",
                usegameicon: "ゲームアイコンを使用",
                logo: "ロゴ",
                decoration: "装飾",
                showdecoration: "装飾を表示",
                rarity: "希少度",
                showhiddenicon: "隠しアイコンを表示",
                hiddenicon: "隠しアイコン",
                replacelogo: "ロゴの置換"
            }
        },
        position: {
            title: "位置",
            content: {
                pos: "画面位置",
                usecustompos: "カスタム位置を使用",
                setcustompos: "設定",
                resetcustompos: "リセット"
            }
        },
        theme: {
            title: "テーマ",
            content: {
                updatetheme: "テーマを更新する",
                savetheme: "テーマを保存",
                sub: [
                    `保存された<span class="hl">ユーザーテーマ</span>は、ホーム画面の<span class="hl">テーマ選択</span>メニューから選択できます。`,
                    `テーマ名が<u>一意</u>であることを確認してください - 既存のテーマと一致する名前は、<u>前のテーマを上書き</u>します！`
                ],
                placeholder: "テーマ名",
                theme: "テーマ",
                importtheme: "テーマのインポート",
                import: "インポート",
                importsub: [
                    `ユーザーが作成した<span class="hl">テーマファイル</span>をインポートします`,
                    `<span class="hl">インポートされたテーマ</span>は、正常にインポートされると自動的に読み込まれ、<span class="hl">テーマ選択</span>メニューから選択できます`,
                ],
                importidle: `インポートする<span class="hl">テーマファイル</span>を選択してください`,
                importcopied: `テーマが正常にコピーされました`,
                importrenamed: `テーマが正常に名前変更されました`,
                importextracted: `テーマが正常に抽出されました`,
                importrewriting: `テーマファイルのパスを書き換えています...`,
                importconverting: `テーマを変換しています...`,
                importcreating: `テーマを作成しています...`,
                importdone: `テーマが正常にインポートされました`,
                importfailed: `選択したテーマファイルのインポート中にエラーが発生しました！`,
                exporttheme: "テーマのエクスポート",
                export: "エクスポート",
                exporterrortitle: "エクスポートエラー",
                exporterrorsub: [
                    "選択したテーマのエクスポート中にエラーが発生しました",
                    `現在のテーマを保存して (<i><span class="hl">テーマを保存</span></i> から) 再度エクスポートを試みてください`,
                    `問題が解決しない場合は、下記のエラーをコピーし、<span class="hl">ホーム画面</span>のリンクボタンから報告してください`
                ],
                synctheme: "テーマを同期",
                syncedwith: "同期中",
                themeselect: "選択されたテーマ"
            }
        }
    },
    logwin: {
        content: {
            tagline: "アプリケーションの起動以来の出来事はこちらです",
            copylog: "ログ内容をコピー"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>本当によろしいですか？</span>
                    <span>以前に構成されたすべてのデータ、<u>カスタマイズを含む</u>は、デフォルトにリセットされます。</span>
                    <span>🛑 これは元に戻すことができません！</span>
                </div>
            `,
            reset: "リセット"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifierに問題が発生し、閉じる必要があります。",
            details: "エラーの詳細は次のとおりです：",
            sub: "お好みのプラットフォームを使用して、この問題を報告するための下のボタンをクリックしてください。",
            report: "レポート",
            log: "アプリログ",
            exit: "終了"
        }
    },    
    tooltips: {
        game: "現在追跡中の実績のゲーム",
        usertheme: "以前に保存したテーマを選択",
        customise: "実績通知をカスタマイズ",
        test: "テスト通知を表示し、カスタマイズを含める",
        kofi: "Ko-Fiで寄付する！",
        discord: "Discordに参加する！",
        github: "問題を報告する",
        lang: "アプリ内で使用するUI言語を選択",
        steamlang: `Steamのアプリケーションファイルにある翻訳を読み込んで、ユーザーが選択した言語で成果情報を表示しようとします<br><br><span class="ttdesc">このオプションは、Steamのアプリケーションデータに保存されているJSONファイル内で翻訳を探そうとします。現在の成果の翻訳が見つからない場合は、代わりにSteamworksから取得した成果情報が表示されます。</span>`,
        maxsteamlangretries: `現在の成果の有効な翻訳を見つけるための試行回数（100msごと）<br><br><span class="ttdesc">Steamは現在、各ゲームに関連付けられたJSONファイルに少量の成果データしか保存していません。このファイルに存在しない成果は、成果がアンロックされた後に追加されます。<br><br>新しいデータの追加には時間がかかる可能性があるため、この値を増やすことで現在の成果の翻訳データが見つかる可能性が高くなりますが、この設定によって計算された時間だけ画面上に通知が表示されるのが遅れる可能性もあります。<br><br>現在の成果に対して有効な翻訳データが見つからない場合は、Steamworksで指定された言語に戻ります。</span>`,
        desktop: "アプリを実行するためのデスクトップショートカットを切り替える",
        startwin: "ログイン後にSteam Achievement Notifierを自動的に開始する",
        startmin: "起動後、システムトレイから開かれるまでアプリUIウィンドウを非表示にする",
        nohwa: `ハードウェアアクセラレーションを無効にし、リソースが限られたシステムや専用のGPUを持たないシステムでのパフォーマンスを向上させることができます<br><br><span class="ttdesc">このオプションを有効化/無効化すると、アプリケーションが再起動します</span>`,
        litemode: "すべての対話型UI要素を無効にし、システムトレイアイコン経由で限定的なアプリ機能のみを提供する。アプリのリソース消費を改善する可能性があります",
        rarity: "レアな実績通知がトリガーされるパーセンテージ。この値を超えるアンロックパーセンテージを持つ実績はメイン通知として表示されます",
        showpercent: "選択したタイプの通知に実績のアンロックパーセンテージを表示する",
        soundonly: "通知を無効にし、カスタマイザで設定されたサウンドのみ再生する",
        extwin: "画面に現在表示されているすべての通知を複製するウィンドウを作成します。このウィンドウは、OBSなどのストリーミングソフトウェアでウィンドウキャプチャソースとして追加できます",
        extwinframerate: "ストリーム通知の目標フレームレートを設定",
        extwinshow: `ストリーム通知ウィンドウの表示/非表示を切り替えます<br><br><span class="ttdesc">タスクバーでフォーカスされている場合は、<code class="ttcode">Ctrl</code>キーを押し続けるとウィンドウの現在位置が表示されます</span>`,
        audiosrc: "アプリによって生成されるオーディオのソースを選択（または無効化）します",
        nowtracking: "実行中のゲームの実績が追跡されていることをユーザーに通知する",
        nowtrackingscale: `トラッキング通知のサイズを設定する`,
        nowtrackingpos: `追跡通知の位置を設定します`,
        shortcuts: "キーボードショートカットを使用してテスト通知をトリガーします。各通知タイプごとにショートカットをカスタマイズできます",
        noiconcache: `ゲームの起動時に実績アイコンのキャッシュを無効にします。<br><br><span class="ttdesc">これにより、ゲームの起動時にアプリのパフォーマンスが大幅に向上し、多くの実績を持つゲームのトラッキング問題も解消される場合があります。ただし、アイコンキャッシュを無効にすると、稀に通知で実績アイコンが表示されなくなる場合があります</span>`,
        steamss: "実績がアンロックされたときにSteamスクリーンショットを撮影する",
        screenshots: "通知が表示されるときに作成する追加メディアのタイプを選択します",
        monitors: "スクリーンショットを撮影するモニター",
        hdrmode: `HDR（High Dynamic Range）モニターを使用する方法と互換性のある方法でスクリーンショットを撮影する`,
        ovpos: "スクリーンショット内の通知オーバーレイの位置",
        ovmatch: "この通知タイプのカスタマイザで設定された画面位置に一致させる",
        ovpath: "このオプションで生成されたスクリーンショットの保存場所",
        ssdelay: "通知が発生してからスクリーンショットが撮影されるまでの遅延を追加",
        sspreview: "スクリーンショットが保存されるときの表示プレビューを表示",
        noanim: "アプリ内のすべてのウィンドウアニメーションとトランジション効果を無効にする",
        noupdatedialog: `自動的に表示され、フォーカスされる <span class="hl">更新可能</span> ダイアログを防止します<br><br><span class="ttdesc">更新ボタンをクリックして、ダイアログにアクセスすることができます</span>`,
        nvda: "実績がアンロックされたときにクリップボードに実績情報をコピーして、NVDAなどのスクリーンリーダーソフトウェアで読み取ることを有効にする",
        tooltips: "特定のUI要素にマウスオーバーしたときにツールチップを表示する",
        pollrate: `ゲームプレイ中の実績データの更新間隔を設定します<br><br><span class="ttdesc">値やシステムのハードウェアに応じて、パフォーマンスが向上または低下することがあります。通常、高い値はシステム負荷を低減させますが、通知の遅延を引き起こす可能性があります</span>`,
        initdelay: `現在の <span class="hl">AppID</span> の検出とプロセス/達成のトラッキング開始の間の遅延を設定します<br><br><span class="ttdesc">この値を増やすことで、Steam が現在のゲームを起動できないシナリオを防ぐことができます（ゲームが開始する前に Steamworks がアプリを初期化するため）</span><br><br><span class="ttdesc">また、この値を増やすことで、ゲームの前の起動プロセスの誤検出を回避することもできます</span>`,
        releasedelay: `現在のゲームがリリースされた後、バックグラウンドプロセスが再起動するまでの待機時間を設定します。自動プロセス追跡と手動でリンクされたゲームの両方に影響します。<br><br><span class="ttdesc">Steamworksがアプリケーションから完全に解放されるためのより長い時間枠を提供します。この値を増やすと、以前に閉じたゲームの追跡などの異常な動作を防ぐことができます</span>`,
        maxretries: `実行中のプロセスを検出されたAppIDにリンクする試行の最大数を設定します。自動プロセス追跡と手動でリンクされたゲームの両方に影響します。<br><br><span class="ttdesc">リンクの試行は1秒ごとに行われます。この試行回数後に実行中のプロセスが現在のAppIDにリンクされていない場合、無効なプロセスが返されます。そのような場合、ゲームはシステムトレイ > オプション > ゲームのリリースを手動で行う必要があります</span>`,
        debug: "デバッグパネルを開きます。これにより、プロセスの詳細なトラッキング情報が表示されます。",
        userust: "システム上でトラックされたゲームプロセスが現在実行されているかどうかを確認するために、Rustベースの代替機能を使用します。チェックが外れている場合、代わりにデフォルトのNodeJSベースのプロセスチェックが使用されます。",
        notifydebug: "すべての通知に対してDevToolsウィンドウを作成します。通知のデバッグ/トラブルシューティングに便利です",
        usecustomfiles: "ユーザーがカスタマイズ可能なファイルを通知に読み込むことを有効にします。通常のユーザーには注意が必要です",
        showcustomfiles: "カスタムファイルの場所を開く",
        log: "プロセスのアクティビティ、警告、エラーに関する情報を表示するアプリログウィンドウを開く",
        reset: "すべての設定データを削除してアプリを再起動する",
        playback: "通知プレビューのアニメーションを一時停止/再開する",
        replay: "通知プレビューのアニメーションを再起動する",
        preset: "カスタマイズする通知プリセットを選択",
        iconanim: "レアアイコンの枠とアニメーションを切り替える",
        alldetails: "このプリセットではデフォルトで非表示になっているすべてのテキスト要素を通知内に表示する",
        usepercent: "XP/S値の代わりに実績の解除パーセンテージを表示",
        displaytime: "通知が表示される秒数を設定する",
        scale: "通知のサイズを拡大または縮小する",
        customtext: "通知内に表示されるカスタムメッセージを設定する",
        usegametitle: "通知内に現在のゲームのタイトルを表示する",
        customfont: "通知内で使用するカスタムフォントを読み込む",
        soundmode: "通知が発生したときに、単一のオーディオファイルまたは複数のオーディオファイルが含まれるフォルダからランダムに選択されるオーディオファイルを選択する",
        soundfile: "通知が発生したときに再生するオーディオファイルを選択する",
        sounddir: "通知が発生したときにランダムに選択されるオーディオファイルが含まれるフォルダを選択する",
        volume: "オーディオファイルの再生音量を設定する",
        preview: "選択したオーディオファイル、またはフォルダからランダムに選択されたオーディオファイルのプレビューを表示する",
        bgstyle: "通知の背景のスタイルを選択する",
        gradientangle: "グラデーションの角度を設定する",
        bgimg: "通知の背景に使用する画像ファイルを読み込む",
        bgimgbrightness: "通知の背景として使用される画像の明るさを設定します",
        brightness: "通知の背景として使用されるゲームアートの明るさを設定する",
        blur: "通知の背景に適用されるぼかしのレベルを設定します",
        roundness: "通知の角の丸みを設定する",
        fontsize: "通知で使用されるフォントのサイズを設定する",
        opacity: "通知の全体的な不透明度を設定する",
        bgonly: "通知の背景の不透明度のみを設定し、他の要素は完全な不透明度のままにする",
        glow: "通知を囲むグローエフェクトを有効にします",
        glowcolor: "グローエフェクトの色を設定します",
        glowsize: "グローエフェクトのサイズを設定します",
        glowx: "グロー効果の水平オフセットを設定します",
        glowy: "グロー効果の垂直オフセットを設定します",
        glowopacity: "グロー効果の不透明度を設定します",
        glowanim: "グローエフェクトに適用されるプリセットのアニメーションを選択します",
        glowspeed: "グローエフェクトに適用されるアニメーションの速度を設定します",
        mask: "カスタム画像で通知の一部をマスキングします",
        maskimg: `マスクとして使用する画像ファイルを読み込みます<br><br><span class="ttdesc">CSSでは、<code class="ttcode">mask-mode: alpha</code> は通常の期待とは逆に機能します。画像ファイルの透明な領域は非表示になり、黒/グレーの領域は下の要素を表示します</span>`,
        outline: "通知の周りに表示するアウトラインの種類を選択してください",
        outlinecolor: "通知の周りのアウトラインの色を設定します",
        outlinewidth: "通知の周りのアウトラインの幅を設定します",
        primarycolor: "通知のプライマリカラーを設定する",
        secondarycolor: "通知のセカンダリカラーを設定する",
        tertiarycolor: "通知の第三カラーを設定する",
        fontcolor: "通知内に表示されるすべてのテキストの色を設定する",
        fontoutline: "通知内に表示されるすべてのテキストにアウトラインを追加する",
        fontoutlinecolor: "テキストのアウトラインの色を設定する",
        fontshadow: "通知内に表示されるすべてのテキストにシャドウを追加する",
        fontshadowcolor: "テキストのシャドウの色を設定する",
        iconroundness: "通知内に表示される実績/ゲームアイコンの角の丸みを設定する",
        plat: "100%アイコンとして使用する画像ファイルを読み込む",
        usegameicon: "デフォルトの通知アイコンを現在のゲームのアイコンで置き換える",
        showhiddenicon: "通知に実績が隠されていることを示す画像を表示",
        hiddenicon: "隠れた実績のアイコンを置き換えるための画像ファイルを読み込む",
        logo: "ロゴアイコンを置き換える画像ファイルを読み込む",
        decoration: "装飾アイコンを置き換える画像ファイルを読み込む",
        showdecoration: "装飾アイコンの表示を切り替える",
        replacelogo: "通知内のロゴアイコンを選択した装飾で置換する",
        pos: "通知の画面上の位置を設定する",
        usecustompos: "通知のカスタム位置を有効にする",
        setcustompos: "通知のカスタム位置を設定する",
        resetcustompos: "通知の位置をデフォルトのカスタム位置にリセットする",
        updatetheme: "選択したカスタマイズオプションで現在のテーマを更新する",
        savetheme: "すべての設定されたカスタマイズオプションを新しいテーマとして保存する",
        visibilitybtn: "カスタマイザーのプレビューとテスト通知で要素の表示/非表示を切り替える",
        delbtn: "要素をデフォルトにリセット",
        imgpath: "このオプションによって生成された通知画像が保存される場所",
        checkforupdates: `GitHubに新しいアプリのバージョンがリリースされたか確認します。更新が利用可能な場合は、<span class="hl">更新可能</span>ダイアログを介して確認されると、自動的にダウンロードされ、インストールされます`,
        linkedgames: `特定のSteamゲームの<span class="hl">自動プロセス追跡</span>をバイパス<br><br><span class="ttdesc">このオプションは非常に特定のシナリオでのみ使用する必要があります。ユーザーは通常の状況でこのオプションを使用する必要はありません！</span>`,
        exclusionlist: `アプリによる特定のSteamゲームの実績の追跡を防止<br><br><span class="ttdesc">このオプションは非常に特定のシナリオでのみ使用する必要があります。ユーザーは通常の状況でこのオプションを使用する必要はありません！</span>`,
        ovx: "スクリーンショットに表示される通知を水平方向にオフセットします",
        ovy: "スクリーンショットに表示される通知を垂直方向にオフセットします",
        importtheme: `ユーザーが作成した<span class="hl">テーマファイル</span>を通じてカスタマイズをインポートします`,
        exporttheme: `現在選択されている<span class="hl">テーマ</span>を共有するためにエクスポートします<br><br><span class="ttdesc">エクスポートを試みる前に、選択した<span class="hl">テーマ</span>が正しく選択されていることを確認してください（<span class="hl">テーマ選択</span>メニューを使用して）。また、カスタマイズが選択した<span class="hl">テーマ</span>に保存されていることを確認してください（<span class="hl">テーマ保存</span>メニューを使用して）<br><br><u>現在の<span class="hl">テーマ</span>にまだ保存されていないカスタマイズはエクスポートされません！</u></span>`,
        webhooks: "アチーブメントが解除されるたびにDiscordサーバーに投稿するためにWebhook URLを使用します",
        webhookmain: `メインの実績が解除されたときに、Discordサーバーに実績情報を投稿するかどうかを切り替えます`,
        webhookrare: "レア実績が解除されたときに、Discordサーバーに実績情報を投稿するかどうかを切り替えます",
        webhookplat: "100%の実績が解除されたときに、Discordサーバーに実績情報を投稿するかどうかを切り替えます",
        webhooktest: "任意の種類のテスト通知がトリガーされたときに、テスト情報をDiscordサーバーに投稿するかどうかを切り替え",
        webhookurl: `希望するDiscordサーバーのために<span class="hl">Webhook URL</span>を設定してください<br><br><span class="ttdesc">WebHook URLは、ユーザーまたはアプリケーションの代理でDiscordサーバー/チャンネルに投稿するために使用されます。Discordサーバーの新しいWebhookを設定するには、ユーザーがWebhookの作成を許可された役割を持っている必要があります<br><br><u>このオプションを使用するにはWebhook URLが必要です</u><br><br>詳細はDiscordの公式ドキュメントを参照してください</span>`,
        webhookspoilers: `Discordに投稿する際に「隠し」実績にネタバレタグを追加`,
        unlockmsg: "$type 内の解除メッセージ/カスタムテキストの位置を設定します",
        title: "$type 内のアチーブメントタイトルの位置を設定します",
        desc: "$type 内のアチーブメントの説明の位置を設定します",
        notification: "通知",
        screenshot: "スクリーンショット",
        percentpos: "$type 内のレアリティパーセンテージの位置を設定します",
        sspercentpos: "$type 内のレアリティパーセンテージの位置を設定します",
        hiddeniconpos: "$type 内の隠し/秘密のアチーブメントアイコンの位置を設定します",
        sshiddeniconpos: "$type 内の隠し/秘密のアチーブメントアイコンの位置を設定します",
        decorationpos: "$type 内の装飾要素の位置を設定します",
        ssdecorationpos: "$type 内の装飾要素の位置を設定します",
        percentbadge: "達成/ゲームアイコンの上に配置されたバッジ内にロック解除のパーセンテージを表示",
        sspercentbadge: "達成/ゲームアイコンの上に配置されたバッジ内にロック解除のパーセンテージを表示",
        percentbadgepos: "バッジの位置を設定",
        sspercentbadgepos: "バッジの位置を設定",
        percentbadgecolor: "バッジの背景色を設定",
        sspercentbadgecolor: "バッジの背景色を設定",
        percentbadgefontcolor: "バッジのフォントカラーを設定",
        sspercentbadgefontcolor: "バッジのフォントカラーを設定",
        percentbadgefontsize: "バッジのサイズを設定",
        sspercentbadgefontsize: "バッジのサイズを設定",
        percentbadgeroundness: "バッジの丸みを設定",
        sspercentbadgeroundness: "バッジの丸みを設定",
        percentbadgex: "バッジ要素の水平方向の位置をオフセット",
        sspercentbadgex: "バッジ要素の水平方向の位置をオフセット",
        percentbadgey: "バッジ要素の垂直方向の位置をオフセット",
        sspercentbadgey: "バッジ要素の垂直方向の位置をオフセット",
        percentbadgeimg: "バッジ要素として希少性に基づいたアイコンを表示",
        sspercentbadgeimg: "バッジ要素として希少性に基づいたアイコンを表示",
        percentbadgeimgbronze: "アンロック率が > 50% の場合に表示されるバッジアイコン",
        sspercentbadgeimgbronze: "アンロック率が > 50% の場合に表示されるバッジアイコン",
        percentbadgeimgsilver: "アンロック率が < 50% かつ > $rarity の場合に表示されるバッジアイコン",
        sspercentbadgeimgsilver: "アンロック率が < 50% かつ > $rarity の場合に表示されるバッジアイコン",
        percentbadgeimggold: "アンロック率が < $rarity の場合に表示されるバッジアイコン",
        sspercentbadgeimggold: "アンロック率が < $rarity の場合に表示されるバッジアイコン",
        resetpbimgs: "すべてのバッジアイコンをデフォルトにリセット",
        elemsmatch: `この通知タイプのためにカスタマイザーで設定された通知要素の設定を一致させる<br><br><span class="ttdesc">一部の通知プリセットは、画面上の通知レイアウトとスクリーンショットベースの通知レイアウトの違いのために、カスタマイザー設定と完全に一致できない場合があります。</span>`,
        themeswitch: `特定のゲームが検出されたときに保存された <span class="hl">テーマ</span> に自動的に切り替え`,
        userthemesync: `選択した <span class="hl">テーマ</span> のカスタマイズをすべての他の通知タイプに同期`,
        showsystrayopts: `通常 <span class="hl">システムトレイ</span> > <span class="hl">オプション</span> に位置するすべてのオプションを表示 <span class="hl">設定</span> > <span class="hl">その他</span>`,
        releaseshortcut: "指定されたキーボードショートカットを使用して、現在追跡中のゲームをリリースします",
        themeselect: "以前に保存したテーマを選択",
        statwin: `現在のゲームの実績統計を外部ウィンドウで表示<br><br><span class="ttdesc">「<span class="hl">Steamの言語に実績を翻訳</span>」オプションと併用すると、特定の実績が解除されるまで一部の翻訳が利用できない場合があります</span>`,
        statwinaot: `「常に最前面」モードに設定することで、実績統計オーバーレイをゲームウィンドウの上に表示できます<br><br><span class="ttdesc">有効にすると、実績統計オーバーレイはユーザーの操作（「クリック」イベントなど）を登録しなくなります。ウィンドウとのインタラクションを再度有効にするには、このオプションを無効にする必要があります</span>`,
        statwinshortcut: "指定されたキーボードショートカットを使用して実績統計オーバーレイを切り替えます",
        ssdisplay: "通知内にキャプチャしたスクリーンショットのプレビューを表示"
    },
    update: {
        updateavailable: "アップデートが利用可能です",
        sub: [
            `<span id="newversion"></span>`,
            "Steam Achievement Notifierの新しいアップデートが利用可能です！",
            `<span id="discordreleasenotes"></span>と<span id="githubreleasenotes"></span>で利用可能な完全なリリースノート`
        ],
        update: "アップデート"
    },
    linkgame: {
        content: {
            exepath: "実行可能ファイルのパス",
            managesub: [
                `特定の <span class="hl">AppID</span> にゲームの <span class="hl">実行可能ファイル</span> を手動でリンクするか、既存のリンクを <span class="hl">解除</span> します`,
                `Steam Achievement Notifier は <span class="hl">リンクされたゲーム</span> のいずれにも <span class="hl">自動プロセス追跡</span> を使用しなくなります - 代わりに、関連する <span class="hl">AppID</span> が検出されるたびに指定された <span class="hl">実行可能ファイル</span> が追跡されます`,
                `<span class="hl" id="appidhelp"><u>SteamゲームのAppIDを見つける方法は？</u></span>`
            ],
            linknew: "新しいリンクされたゲーム",
            linknewsub: [
                `ゲームの <span class="hl">実行可能ファイル</span> と関連する <span class="hl">AppID</span> の間に新しいリンクを作成します`,
                `作成された後、リンクは以前の <span class="hl">リンクされたゲームを管理</span> ダイアログを介して <span class="hl">解除</span> できます`
            ],
            link: "リンク",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `任意のSteamゲームの<span class="hl">AppID</span>を<span class="hl">除外リスト</span>に追加`,
                `Steam Achievement Notifierは、<span class="hl">除外リスト</span>に追加された任意のゲームの<span class="hl">AppID</span>に関して実績データを追跡しません`,
                `<span class="hl" id="appidhelp"><u>SteamゲームのAppIDを見つける方法</u></span>`
            ],
            exclusionnew: "新しい除外",
            exclusionnewsub: [
                `<span class="hl">除外リスト</span>に追加する<span class="hl">AppID</span>を入力してください`
            ]
        }
    },
    notificationelems: {
        title: "通知要素",
        content: {
            unlockmsg: "解除メッセージ",
            title: "アチーブメントタイトル",
            desc: "アチーブメントの説明",
            hiddeniconpos: "隠しアイコン",
            sshiddeniconpos: "隠しアイコン",
            decorationpos: "装飾",
            ssdecorationpos: "装飾",
            percentpos: "レアリティパーセンテージ",
            sspercentpos: "レアリティパーセンテージ",
            percentbadge: "パーセントバッジ",
            sspercentbadge: "パーセントバッジ",
            percentbadgepos: "バッジの位置",
            sspercentbadgepos: "バッジの位置",
            percentbadgecolor: "バッジの色",
            sspercentbadgecolor: "バッジの色",
            percentbadgefontcolor: "バッジのフォントカラー",
            sspercentbadgefontcolor: "バッジのフォントカラー",
            percentbadgefontsize: "バッジのサイズ",
            sspercentbadgefontsize: "バッジのサイズ",
            percentbadgeroundness: "バッジの丸み",
            sspercentbadgeroundness: "バッジの丸み",  
            percentbadgex: "水平方向のオフセット",
            sspercentbadgex: "水平方向のオフセット",
            percentbadgey: "垂直方向のオフセット",
            sspercentbadgey: "垂直方向のオフセット",
            percentbadgeimg: "アイコンを使用",
            sspercentbadgeimg: "アイコンを使用",
            percentbadgeimgbronze: "希少性: > 50%",
            sspercentbadgeimgbronze: "希少性: > 50%",
            percentbadgeimgsilver: "希少性: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "希少性: < 50% & > $rarity%",
            percentbadgeimggold: "希少性: < $rarity%",
            sspercentbadgeimggold: "希少性: < $rarity%",
            resetpbimgs: "バッジアイコンをリセット",
            elemsmatch: "カスタマイザー設定を一致させる",
            ssdisplay: "スクリーンショットのプレビュー"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `任意のゲームの <span class="hl">AppID</span> を追加して、検出されたときに <span class="hl">テーマ</span> を自動的に切り替え`,
                `保存された任意の <span class="hl">テーマ</span> を各通知タイプに選択でき、使用する希望のモニターを <span class="hl">スクリーンショットソース</span> として指定できます`,
                `<span class="hl" id="appidhelp"><u>SteamゲームのAppIDはどのように見つけることができますか？</u></span>`
            ],
            themeswitchnew: "新しい自動切替",
            themeswitchnewsub: [
                `ゲームの <span class="hl">AppID</span> と、希望のモニターを <span class="hl">スクリーンショットソース</span> として指定してください`,
                `このゲームの <span class="hl">AppID</span> が検出されたときに各通知タイプのために切り替える <span class="hl">テーマ</span> を選択`
            ],
            themes: "テーマ",
            src: "スクリーンショットソース",
            themedeleted: "テーマが削除されました"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `現在、<span class="hl">${opt}</span> オプションを有効にしようとしています。ただし、Linuxシステムでは、<code class="dialogcode">${dep}</code> パッケージをインストールせずにスクリーンショットを有効にすることはできません`,
    `この依存関係をインストールするには、<code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> を実行してください。これにより、このデバイスでスクリーンショットを撮影できるようになります`
]