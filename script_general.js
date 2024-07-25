(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist])","backgroundPreloadEnabled":true,"gap":10,"scrollBarWidth":10,"mobileMipmappingEnabled":false,"width":"100%","backgroundColorDirection":"vertical","downloadEnabled":false,"paddingTop":0,"backgroundOpacity":1,"vrPolyfillScale":1,"definitions": [{"itemLabelPosition":"bottom","gap":10,"right":"0.12%","itemLabelFontWeight":"normal","itemPaddingRight":3,"itemLabelFontSize":14,"itemOpacity":1,"scrollBarWidth":10,"itemLabelTextDecoration":"none","itemThumbnailShadowVerticalLength":3,"itemLabelFontFamily":"Arial","paddingTop":10,"backgroundOpacity":0,"itemPaddingLeft":3,"itemLabelGap":9,"rollOverItemBackgroundOpacity":0,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemThumbnailOpacity":1,"itemThumbnailShadowBlurRadius":8,"paddingBottom":10,"itemPaddingTop":3,"paddingLeft":20,"toolTipHorizontalAlign":"center","horizontalAlign":"left","itemPaddingBottom":3,"paddingRight":20,"itemLabelFontColor":"#FFFFFF","playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemThumbnailShadowSpread":1,"itemThumbnailScaleMode":"fit_outside","verticalAlign":"top","borderRadius":5,"scrollBarColor":"#FFFFFF","height":135.02,"bottom":"0.02%","layout":"horizontal","selectedItemLabelFontColor":"#FFCC00","itemHorizontalAlign":"center","itemLabelHorizontalAlign":"center","itemMode":"normal","scrollBarMargin":2,"scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","class":"ThumbnailList","itemThumbnailShadowColor":"#000000","itemThumbnailShadowOpacity":0.54,"itemBorderRadius":0,"itemThumbnailBorderRadius":50,"itemBackgroundColor":[],"selectedItemLabelFontWeight":"bold","itemBackgroundColorDirection":"vertical","itemThumbnailHeight":75,"itemBackgroundColorRatios":[],"itemThumbnailShadow":true,"left":"0.01%","itemThumbnailShadowHorizontalLength":3,"itemThumbnailWidth":75,"itemVerticalAlign":"middle","itemLabelFontStyle":"normal","rollOverItemLabelFontWeight":"normal","borderSize":0,"data":{"name":"ThumbnailList35762"},"minWidth":20,"shadow":false,"itemBackgroundOpacity":0,"minHeight":20,"propagateClick":false},{"vfov":180,"label":trans('panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA.label'),"hfovMin":"150%","hfovMax":130,"hfov":360,"frames":[{"stereoCube":{"levels":[{"colCount":36,"width":18432,"rowCount":3,"url":"media/panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"ondemand"},{"colCount":24,"width":12288,"rowCount":2,"url":"media/panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand"},{"colCount":12,"width":6144,"rowCount":1,"url":"media/panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"]}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"VR2_clair"},"class":"Panorama","thumbnailUrl":"media/panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_t.jpg","partial":false,"pitch":0,"id":"panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA"},{"automaticZoomSpeed":10,"id":"panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0},{"data":{"name":"Label28174"},"textDecoration":"none","width":280,"paddingTop":0,"backgroundOpacity":0,"fontFamily":"Arial","id":"label4056","paddingBottom":0,"text":trans('label4056.text'),"paddingLeft":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","top":17,"fontColor":"#FFFFFF","verticalAlign":"middle","borderRadius":0,"paddingRight":0,"height":280,"class":"Label","maxHeight":50,"fontSize":30,"maxWidth":500,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":500,"shadow":false,"fontWeight":"bold","borderSize":0,"propagateClick":false},{"surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer","gyroscopeEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","zoomEnabled":true,"touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"gap":10,"scrollBarWidth":10,"width":85,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingTop":0,"backgroundOpacity":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","data":{"name":"--SETTINGS"},"paddingBottom":0,"paddingLeft":0,"toolTipHorizontalAlign":"center","horizontalAlign":"left","top":"17.26%","verticalAlign":"top","borderRadius":0,"paddingRight":0,"scrollBarColor":"#000000","height":430,"creationPolicy":"inAdvance","scrollBarVisible":"rollOver","scrollBarMargin":2,"scrollBarOpacity":0.5,"layout":"absolute","class":"Container","contentOpaque":false,"maxHeight":430,"maxWidth":85,"overflow":"scroll","minHeight":430,"right":"1.22%","minWidth":85,"shadow":false,"borderSize":0,"propagateClick":true},{"class":"PlayList","items":[{"camera":"this.panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA","class":"PanoramaPlayListItem"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"class":"PlayList","items":[{"camera":"this.panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA_camera","media":"this.panorama_E1806F1D_EA8C_E100_41E9_A862FED6B0DA","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"gap":3,"scrollBarWidth":10,"width":85,"paddingTop":0,"backgroundOpacity":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","data":{"name":"-button set"},"paddingBottom":0,"paddingLeft":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","top":"14%","verticalAlign":"top","borderRadius":0,"paddingRight":0,"scrollBarColor":"#000000","height":320,"creationPolicy":"inAdvance","scrollBarVisible":"rollOver","scrollBarMargin":2,"scrollBarOpacity":0.5,"layout":"vertical","class":"Container","contentOpaque":false,"maxHeight":320,"maxWidth":85,"overflow":"scroll","minHeight":320,"right":"0%","minWidth":85,"shadow":false,"borderSize":0,"propagateClick":true},{"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowHorizontalLength":0,"subtitlesPaddingTop":5,"playbackBarHeadBorderSize":0,"playbackBarProgressOpacity":1,"subtitlesOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"subtitlesGap":0,"toolTipBorderRadius":3,"subtitlesBackgroundColor":"#000000","toolTipFontSize":12,"progressBackgroundColorRatios":[0,1],"playbackBarHeadOpacity":1,"toolTipShadowOpacity":1,"playbackBarBorderSize":2,"playbackBarOpacity":1,"vrPointerColor":"#FFFFFF","id":"MainViewer","playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleSelectionColor":"#FFFFFF","paddingRight":0,"playbackBarBackgroundOpacity":1,"paddingLeft":0,"toolTipTextShadowColor":"#666666","playbackBarBottom":10,"transitionDuration":500,"toolTipHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","toolTipFontWeight":"normal","toolTipPaddingRight":6,"progressBarBorderSize":0,"toolTipFontFamily":"Arial","progressOpacity":1,"progressBarBorderRadius":4,"toolTipPaddingTop":4,"surfaceReticleSelectionOpacity":1,"progressBarBackgroundColorDirection":"vertical","subtitlesBorderSize":0,"progressBarBorderColor":"#000000","toolTipDisplayTime":600,"progressRight":10,"progressBackgroundOpacity":1,"subtitlesFontColor":"#FFFFFF","displayTooltipInTouchScreens":true,"toolTipShadowSpread":0,"class":"ViewerArea","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"firstTransitionDuration":0,"toolTipBorderSize":1,"progressBarBackgroundColorRatios":[0,1],"playbackBarHeight":20,"translationTransitionDuration":1000,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","subtitlesFontWeight":"normal","subtitlesHorizontalAlign":"center","playbackBarProgressBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipShadowColor":"#333333","toolTipTextShadowBlurRadius":3,"minHeight":50,"toolTipTextShadowOpacity":0,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"borderSize":0,"playbackBarRight":0,"propagateClick":false,"toolTipBackgroundColor":"#999999","minWidth":100,"transitionMode":"blending","toolTipPaddingBottom":4,"playbackBarProgressBorderRadius":0,"progressBorderColor":"#AAAAAA","subtitlesTop":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"progressBarBackgroundColor":["#222222","#444444"],"subtitlesBottom":50,"subtitlesPaddingLeft":5,"subtitlesPaddingRight":5,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesTextShadowVerticalLength":1,"subtitlesFontSize":"3vmin","paddingTop":0,"doubleClickAction":"toggle_fullscreen","subtitlesTextShadowColor":"#000000","toolTipFontStyle":"normal","playbackBarHeadShadowOpacity":0.7,"progressBarOpacity":1,"toolTipShadowBlurRadius":3,"vrPointerSelectionTime":1500,"vrPointerSelectionColor":"#FF0000","paddingBottom":0,"playbackBarHeadShadowVerticalLength":0,"top":0,"progressBorderRadius":4,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"progressBottom":1,"progressHeight":20,"toolTipOpacity":0.5,"playbackBarBorderColor":"#AAAAAA","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingBottom":5,"playbackBarBorderRadius":4,"progressBorderSize":2,"borderRadius":0,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","playbackBarProgressBorderColor":"#000000","playbackBarLeft":0,"toolTipPaddingLeft":6,"playbackBarHeadHeight":30,"progressLeft":10,"subtitlesTextShadowBlurRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesEnabled":true,"toolTipShadowVerticalLength":0,"displayTooltipInSurfaceSelection":true,"playbackBarHeadBorderRadius":0,"subtitlesFontFamily":"Arial","left":0,"surfaceReticleOpacity":0.6,"surfaceReticleColor":"#FFFFFF","right":0,"toolTipFontColor":"#606060","shadow":false,"subtitlesShadow":false,"data":{"name":"Main Viewer"},"playbackBarHeadShadowColor":"#000000"},{"scaleMode":"fill","width":80,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingBottom":0,"paddingLeft":0,"toolTipHorizontalAlign":"center","horizontalAlign":"left","paddingRight":0,"verticalAlign":"top","borderRadius":0,"top":21.17,"height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","class":"Image","maxHeight":80,"maxWidth":80,"left":26.3,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"shadow":false,"borderSize":0,"propagateClick":true},{"gap":10,"right":"0%","width":110,"paddingTop":0,"backgroundOpacity":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","data":{"name":"button menu sup"},"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"horizontalAlign":"center","scrollBarColor":"#000000","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"height":110,"bottom":"4.6%","scrollBarVisible":"rollOver","scrollBarMargin":2,"scrollBarOpacity":0.5,"layout":"horizontal","class":"Container","creationPolicy":"inAdvance","contentOpaque":false,"overflow":"visible","minHeight":1,"scrollBarWidth":10,"minWidth":1,"shadow":false,"borderSize":0,"propagateClick":true}],"defaultVRPointer":"gaze","id":"rootPlayer","mouseWheelEnabled":true,"toolTipHorizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"horizontalAlign":"left","paddingRight":0,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"verticalAlign":"top","borderRadius":0,"scrollBarColor":"#000000","height":"100%","backgroundColor":["#000000"],"scrollBarVisible":"rollOver","scripts":{"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"translate":TDV.Tour.Script.translate,"isPanorama":TDV.Tour.Script.isPanorama,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizStart":TDV.Tour.Script.quizStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"resumePlayers":TDV.Tour.Script.resumePlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"init":TDV.Tour.Script.init,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupImage":TDV.Tour.Script.showPopupImage,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoBack":TDV.Tour.Script.historyGoBack,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setValue":TDV.Tour.Script.setValue,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPixels":TDV.Tour.Script.getPixels,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags},"backgroundColorRatios":[0],"scrollBarMargin":2,"scrollBarOpacity":0.5,"layout":"absolute","class":"Player","creationPolicy":"inAdvance","contentOpaque":false,"mediaActivationMode":"window","desktopMipmappingEnabled":false,"overflow":"hidden","minHeight":20,"data":{"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"rate":1,"pitch":1,"speechOnInfoWindow":false},"initialScale":0.65},"minWidth":20,"shadow":false,"borderSize":0,"propagateClick":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jul 25 2024