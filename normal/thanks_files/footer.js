//kl footer v2015   北京昆仑万维科技股份有限公司
(function(){
	var KLCommonFooter = {
		sites: {
			'kunlun.com': {
				name: '',
				n: '京网文〔2017〕9195-1044号 京ICP证080262号 京ICP备09007496号-2 （总）网出证（京）字151号',
				links: ''
			},
			'klyou.com': {
				name: '北京昆仑在线网络科技有限公司',
				n: '京网文[2016]5343-684号 京ICP证090864号 京公安备11010102000431 （总）网出证（京）字150号',
				links: '<a target="_blank" href="/company/intro.html">公司介绍</a> | <a target="_blank" href="/company/contactus.html">联系我们</a> | <a target="_blank" href="/agreement.html">用户协议</a> | <a target="_blank" href="/baomi.html">保密条款</a> | '
			},
			'koramgame.cn': {
				name: '北京昆仑乐享网络技术有限公司',
				n: '京网文[2016]4066-516号 京ICP证140181号 京ICP备13038170号-1 （总）网出证（京）字149号',
				links: ''
			}
		},
		configs: {
			'kunlun.com': {
				logo: '<a href="http://www.kunlun.com/"><img src="http://static.kunlun.com/web/klcms/v7/images/logo.png" /></a>',
				n: '',
				bg_color: '#FFF'
			},
			'klyou.com': {
				logo: '<a href="http://www.klyou.com/"><img src="http://xj.klyou.com/js/images/top_logo.jpg" /></a>',
				n: '',
				bg_color: '#FFF'
			},
			'koramgame.cn': {
				logo: '<font style="font-size:39px;">昆仑乐享</font>',
				n: '',
				bg_color: '#FFF'
			},
			'test.local': {
				logo: '<a href="http://www.kunlun.com/"><img border="0" src="http://static.kunlun.com/web/klcms/v7/images/logo.png" /></a><a href="#"><img src="http://static.kunlun.com/web/ttdsj/images/logo_big.png" height="50" /></a>',
				n: '电出字：01-2014-0025 京新广字[2014]481号 新广出审[2014]1174号 文网进字[2014]0105号',
				bg_color: '',
				provider: 'klyou.com',
				homepage: '/(www.kunlun.com/footer/test.html)?'/*,
				append_to: document.getElementById('sss')*/
			},
			'sg.kunlun.com': {
				logo: '',
				n: '京新出音[2008]406号 文网游备字[2010]W-SLG005号',
				bg_color: '#FFF'
			},
			'wx.kunlun.com': {
				logo: '',
				n: '京新出音[2009]326号 文网游备字[2010]W-SLG007号',
				bg_color: '#FFF'
			},
			'qjp2.kunlun.com': {
				logo: '',
				n: '京新出音[2013]485号 新出审字[2013]1580号 文网游备字[2013]W-SLG025号',
				bg_color: '#1a1b1f'
			},
			'seal.kunlun.com': {
				logo: '',
				n: '电出字：01-2013-0026	京新出音[2013]662号 新出审字[2013]1683号	文网进字[2013]042号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},
			'ro.kunlun.com': {
				logo: '',
				n: '电出字：01-2012-0021	京新出音[2012]434号 新出审字[2012]717号 文网进字[2012]043号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},
			'ab2.kunlun.com': {
				logo: '<img border="0" src="http://static.kunlun.com/web/ab/images_new/footer_01.png" /><img border="0" src="http://static.kunlun.com/web/ab/images_new/footer_03.png" />',
				n: '电出字：01-2015-0046号 京新广字[2015]564号 新广出审[2015]929号 文网进字[2015]0048号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4de78b55014df5b4c09b07be" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'klyou.com',
				homepage: '/index.html',
				bg_color: '#000'
			},
			'xb.kunlun.com': {
				logo: '',
				n: '京新出音[2014]18号 新广出审[2014]463号 文网游备字[2013]M-RPG087号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},
			'jd.kunlun.com': {
				logo: '',
				n: '京新出音[2012]708号 科技与数字[2012]751号 文网游备字[2012]W-SLG228号 <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/product/view/99CB05E7C37C4DF3B0B9617F68CEB1BE" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},
			'wxwz.kunlun.com': {
				logo: '',
				n: '电话：010-65210304 京新广字[2014]252号	 新广出审[2014]943号	文网游备字[2014]M-RPG123号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},
			'sf.kunlun.com': {
				logo: '',
				n: '京新广字[2015]324号 京新广字[2015]600号 新广出审[2015]919号 文网游备字[2015]M-RPG0653号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4f81d2ac014fb5340f52690c" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},
			'xy.kunlun.com': {
				logo: '',
				n: '京新出音[2014]76号 新广出审[2014]632号 文网游备字[2013]M-RPG090号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/58B0C38943554EC8A029BB4560603C25" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'klyou.com',
				homepage: '/index.html',
				bg_color: '#000'
			},
			'sg2.kunlun.com': {
				logo: '',
				n: '京新出音[2012]241号 科技与数字[2012]270号 文网游备字[2012]W-SLG020号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},
			'wxqz.kunlun.com': {
				logo: '',
				n: '京新出音[2014]138号 新广出审[2014]381号 文网游备字[2013]M-RPG086号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},
			'els.kunlun.com': {
				top:'62px',
				logo: '',
				n: '京新广字[2015]684号 新广出审[2015]1116号 文网游备字〔2015〕M-RPG 0652 号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4f81d2ac014fb52e2aba68d7" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},
			'qjp.kunlun.com': {
				logo: '',
				n: '京新出音[2010]472号 科技与数字[2011]023号 文网游备字[2011]W-SLG005号',
				provider: 'klyou.com',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},
			'm3.kunlun.com': {
				top: '62px',
                                logo: '',
                                n: '新广出审[2015]1320号',
                                provider: 'koramgame.cn',
                                homepage: '/index.html',
                                bg_color: '#000'
                        },
			'coc.kunlun.com': {
				logo: '<br />',
				n: '公司地址：北京市东城区西总布胡同46号 联系电话：010-65210288 电出字：01-2015-0040号 京新广字[2015]553号 新广出审[2015]1084号 文网游进字[2015]0062号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4de78b55014df5051e0c0416" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a><br/>部落冲突全球客服电话：4009954788 全国文化市场统一举报电话：12318',
				provider: 'koramgame.cn',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},
			'cr.kunlun.com': {
                                logo: '<br />',
                                n: '公司地址：北京市东城区西总布胡同46号 联系电话：010-65210288 文网游进字[2016]0024号 新广出审[2016]396号 <a class="" target="_blank" href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/gameNetTag/4028c08b528c894e0153162d8afc75fa"><img width="15" height="15" class="Footer-Agerating-CN-image" src="/img/license-site.png"/></a><br>本游戏由北京昆仑乐享网络技术有限公司提供 全国文化市场统一举报电话：12318',
                                provider: 'koramgame.cn',
                                homepage: '/guide.html',
                                bg_color: '#000'
                        },

			'mw.kunlun.com': {
				logo: '',
				n: '京新出音[2014]64号 新广出审[2014]595号 文网游备字[2013]M-RPG099号',
				provider: 'koramgame.cn',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},
			'bb.kunlun.com': {
				logo: '<img src="http://static.kunlun.com/web/bb/images/150128/kl_logo2.png" /><img src="http://static.kunlun.com/web/bb/images/150128/kl_logo.png" />',
				n: '电出字：01-2014-0025	京新广字[2014]481号 新广出审[2014]1174号 文网进字[2014]0105号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/7AC1BB3551FC4270B53E948ED12AA2D8" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>海岛奇兵全球客服电话：4009954788 全国文化市场统一举报电话：12318',
				provider: 'koramgame.cn',
				homepage: '/(guide.html)?',
				bg_color: '#FFF'
			},
			'tt.kunlun.com': {
				logo: '<a href="http://www.kunlun.com/"><img border="0" src="http://static.kunlun.com/web/klcms/v7/images/logo.png" /></a><a href="#"><img src="http://static.kunlun.com/web/ttdsj/images/logo_big.png" height="50" />',
				n: '电出字：01-2015-0012号 京新广字[2015]259号 新广出审[2015]671号 文网进字[2015]0021号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08c4c77e82d014c78ce5ce703ce" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'koramgame.cn',
				homepage: '/(index.html)?',
				bg_color: '#FFF'
			},		
			'jhzr.kunlun.com': {
				logo: '',
				n: '电话：010-65210304 京新广字[2014]208号 新广出审[2014]852号 文网游备字[2013]M-RPG086号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/811D579FD72E4BCBAB463F6C3EEAB330" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'koramgame.cn',
				homepage: '/(index.html)?',
				bg_color: '#000'
			},	
			'wsjj.kunlun.com': {
				top: '62px',
				logo: '',
				n: '京新广字[2014]448号 新广出审[2014]1343号 文网游备字[2014]M-RPG176号 <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/product/view/633C67545A84468486BDDCA951B19818" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				provider: 'koramgame.cn',
				homepage: '/index.html',
				bg_color: '#131313'
			},	
			'tx.kunlun.com': {
                                top: '62px',
                                logo: '',
                                n: '电话：010-65210304',
                                provider: 'koramgame.cn',
                                homepage: '/index.html',
                                bg_color: '#131313'
                        },
                        's.kunlun.com': {
                                logo: '',
                                n: '京新广字[2015]536号 新广出审[2015]972号 文网游备字〔2015〕Ｍ-RPG 0673号',
				provider: 'koramgame.cn',
                                homepage: '/(index.html)?',
                                bg_color: '#FFF'
                        },
                        'poro.kunlun.com': {
                                logo: '',
                                n: '电出字：01-2015-0044号 京新广字[2015]560号 新广出审[2015]1022号 文网游进字[2015]0040号',
				provider: 'koramgame.cn',
                                homepage: '/(index.html)?',
                                bg_color: '#FFF'
                        },
                        'nfs.kunlun.com': {
                                logo: '',
                                n: '电出字：01-2015-0013号 京新广字[2015]258号 新广出审[2015]669号 文网游进字[2015]0050号',
				provider: 'koramgame.cn',
                                homepage: '/index.html',
                                bg_color: '#FFF'
                        },   
			'm3.klyou.com': {
                                logo: '',
                                n: '',
                                bg_color: '#000'
                        },
			'seal.klyou.com': {
				logo: '',
				n: '电出字：01-2013-0026	京新出音[2013]662号 新出审字[2013]1683号	文网进字[2013]042号',
				bg_color: '#FFF'
			},
			'ro.klyou.com': {
				logo: '',
				n: '电出字：01-2012-0021	京新出音[2012]434号 新出审字[2012]717号 文网进字[2012]043号',
				bg_color: '#FFF'
			},
			'tera.klyou.com': {
				logo: '<img border="0" src="http://xj.klyou.com/js/images/top_logo.jpg" /><img src="http://static.kunlun.com/web/tera/images141125/tera_footer_2.jpg" height="50" />',
				n: '电出字：01-2013-0004	京新出音[2013]576号 新出审字[2013]1681号	文网进字[2014]005号',
				bg_color: '#000'
			},
			'ab2.klyou.com': {
				logo: '<img border="0" src="http://static.kunlun.com/web/ab/images_new/footer_01.png" /><img border="0" src="http://static.kunlun.com/web/ab/images_new/footer_03.png" />',
				n: '电出字：01-2015-0046号 京新广字[2015]564号 新广出审[2015]929号 文网进字[2015]0048号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4de78b55014df5b4c09b07be" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#000'
			},
			'xb.klyou.com': {
				logo: '',
				n: '京新出音[2014]18号 新广出审[2014]463号 文网游备字[2013]M-RPG087号',
				bg_color: '#FFF'
			},
			'jd.klyou.com': {
				logo: '',
				n: '京新出音[2012]708号 科技与数字[2012]751号 文网游备字[2012]W-SLG228号 <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/product/view/99CB05E7C37C4DF3B0B9617F68CEB1BE" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#FFF'
			},
			'wxwz.klyou.com': {
				logo: '',
				n: '京新广字[2014]252号	 新广出审[2014]943号	文网游备字[2014]M-RPG123号',
				bg_color: '#FFF'
			},
			'sf.klyou.com': {
				logo: '',
				n: '京新广字[2015]324号 京新广字[2015]600号 新广出审[2015]919号 文网游备字[2015]M-RPG0653号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4f81d2ac014fb5340f52690c" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#000'
			},
			'xy.klyou.com': {
				logo: '',
				n: '京新出音[2014]76号 新广出审[2014]632号 文网游备字[2013]M-RPG090号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/58B0C38943554EC8A029BB4560603C25" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#000'
			},
			'sg2.klyou.com': {
				logo: '',
				n: '京新出音[2012]241号 科技与数字[2012]270号 文网游备字[2012]W-SLG020号',
				bg_color: '#000'
			},
			'wxqz.klyou.com': {
				logo: '',
				n: '京新出音[2014]138号 新广出审[2014]381号 文网游备字[2013]M-RPG086号',
				bg_color: '#FFF'
			},
			'els.klyou.com': {
				logo: '',
				n: '京新广字[2015]684号 新广出审[2015]1116号 文网游备字〔2015〕M-RPG 0652 号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4f81d2ac014fb52e2aba68d7" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#000'
			},
			'qjp.klyou.com': {
				logo: '',
				n: '京新出音[2010]472号 科技与数字[2011]023号 文网游备字[2011]W-SLG005号',
				bg_color: '#000'
			},
			'coc.koramgame.cn': {
				logo: '<img src="http://coc.kunlun.com/guide/images/logo_1.png" /><font style="font-size:39px;">昆仑乐享</font>',
				n: '电出字：01-2015-0040号 京新广字[2015]553号 新广出审[2015]1084号 文网游进字[2015]0062号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08b4de78b55014df5051e0c0416" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a> 全国文化市场统一举报电话：12318',
				bg_color: '#000'
			},
			'cr.koramgame.cn': {
                                logo: '',
				 n: '公司地址：北京东城区西总布胡同46号<br>电出字：01-2016-0012号 京新广字[2016]151号 文网游进字[2016]0024号 新广出审[2016]396号 <a class="Footer-Agerating-CN-link" target="_blank" href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/gameNetTag/4028c08b528c894e0153162d8afc75fa"><img class="Footer-Agerating-CN-image" src="/img/license-site.png"/></a> 全国文化市场统一举报电话：12318',
                                bg_color: '#000'
                        },

			'mw.koramgame.cn': {
				logo: '',
				n: '京新出音[2014]64号 新广出审[2014]595号 文网游备字[2013]M-RPG099号',
				bg_color: '#000'
			},
			'bb.koramgame.cn': {
				logo: '<img src="http://static.kunlun.com/web/bb/images/150128/kl_logo2.png" /><img src="http://static.kunlun.com/web/bb/images/150128/kl_logo.png" />',
				n: '电出字：01-2014-0025	京新广字[2014]481号 新广出审[2014]1174号 文网进字[2014]0105号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/7AC1BB3551FC4270B53E948ED12AA2D8" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a> 全国文化市场统一举报电话：12318',
				bg_color: '#FFF'
			},
			'tt.koramgame.cn': {
				logo: '<a href="http://www.kunlun.com/"><img border="0" src="http://static.kunlun.com/web/klcms/v7/images/logo.png" /></a><a href="#"><img src="http://static.kunlun.com/web/ttdsj/images/logo_big.png" height="50" />',
				n: '电出字：01-2015-0012号 京新广字[2015]259号 新广出审[2015]671号 文网进字[2015]0021号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08c4c77e82d014c78ce5ce703ce" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#FFF'
			},		
			'jhzr.koramgame.cn': {
				logo: '',
				n: '京新广字[2014]208号 新广出审[2014]852号 文网游备字[2013]M-RPG086号 <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/811D579FD72E4BCBAB463F6C3EEAB330" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#000'
			},	
			'wsjj.koramgame.cn': {
				logo: '',
				n: '京新广字[2014]448号 新广出审[2014]1343号 文网游备字[2014]M-RPG176号 <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/product/view/633C67545A84468486BDDCA951B19818" target="_blank"><img width="15" height="15" src="http://static.kunlun.com/web/klcms/v7/images/dzbq.png" alt=""></a>',
				bg_color: '#131313'
			},	
			's.koramgame.cn': {
                                logo: '',
                                n: '京新广字[2015]536号 新广出审[2015]972号 文网游备字〔2015〕Ｍ-RPG 0673号',
                                bg_color: '#FFF'
                        },
			'poro.koramgame.cn': {
                                logo: '',
                                n: '电出字：01-2015-0044号 京新广字[2015]560号 新广出审[2015]1022号 文网游进字[2015]0040号',
                                bg_color: '#FFF'
                        },
			'nfs.koramgame.cn': {
                                logo: '',
                                n: '电出字：01-2015-0013号 京新广字[2015]258号 新广出审[2015]669号 文网游进字[2015]0050号',
                                bg_color: '#FFF'
                        },																																																								
		},
		
		_domain: null,
		
		getDomain: function() {
			return this._domain;
		},
		
		getSiteInfo: function(d) {
			if (!d)
			  d = this.getDomain();
			  
			return this.sites[d] || this.sites['kunlun.com'];
		},
		
		getProductInfo: function() {
			var h = location.hostname;
			if (typeof this.configs[h] != 'undefined')
				return this.configs[h]
			
			var d = this.getDomain();
			return this.configs[d] || this.configs['kunlun.com'];
		},
		
		getDefaultLogo: function() {
			var d = this.getDomain();
			return this.configs[d].logo;
		},
		
		loadCSS: function() {
			//<link rel="stylesheet" type="text/css" href="footer.css" />
			var cssLink = document.createElement("link");
			cssLink.setAttribute("rel", "stylesheet");
			cssLink.setAttribute("type", "text/css");
			cssLink.setAttribute("href", "https://coc.kunlun.com/js/footer.css");
			document.getElementsByTagName('head')[0].appendChild(cssLink);
		},
		
		init: function() {
			this._domain = location.hostname.replace(/^(\S+\.)(kunlun|klyou|koramgame)\.(com|cn)$/, "$2\.$3");
		},
		
		append: function() {
			this.init();
			
			var siteInfo = this.getSiteInfo();
			
			var prouctInfo = this.getProductInfo();
			if (prouctInfo === false) return false; // 产品配置为false，则不显示
			
			this.loadCSS();
			
			var footerContent = '<div class="klcommon_footer_bg"';
			if (prouctInfo.bg_color != '') {
				footerContent += ' style="background-color:'+prouctInfo.bg_color+';"';
			}
			footerContent += '><div class="klcommon_footer"';
			if (prouctInfo.bg_color != '') {
				footerContent += ' style="background-color:'+prouctInfo.bg_color+';"';
			}
/*
			footerContent += '><div class="footer_logo">';
			// [logo]
			if (prouctInfo.logo != '') {
				footerContent += prouctInfo.logo
			} else {
				footerContent += this.getDefaultLogo();
			}
			footerContent += '</div>';
*/			
			footerContent += '<div class="footer_text">';
			// line 1
			// footer links
			footerContent += siteInfo.links + '<br />';
			// line 2
			// 公司名 及 备案号
			footerContent += siteInfo.name + '<br> ' + siteInfo.n + '<br />';
			// line 3
			// 产品批号
			if (prouctInfo.n != '') {
			  footerContent += prouctInfo.n + '<br />';
			}
			// line 4
			footerContent += '';
			footerContent += '</div></div></div>';
			
			document.write(footerContent);
	
			// top - provider
			if (typeof prouctInfo.provider != 'undefined' && prouctInfo.provider != '') {
				var patt1 = new RegExp("^" + prouctInfo.homepage + "$");
				if (patt1.test(location.pathname)) {
					this.appendProvider(prouctInfo.provider, prouctInfo.provider_pos);
				}
			}
		},
		
		appendProvider: function(provider, position) {
			var siteInfo = this.getSiteInfo(provider);
			var productInfo = this.getProductInfo(position);
			var providerDiv = document.createElement("div");
			providerDiv.className = "klcommon_provider";
			if (typeof productInfo.top != 'undefined') {
				providerDiv.style.top = productInfo.top;
//				providerDiv.style.left = (position.left ? position.left : 10) + 'px';
			} else {
				providerDiv.style.top = '10px';
				providerDiv.style.left = '10px';
			}
			//providerDiv.style.backgroundColor = prouctInfo.bg_color;
			providerDiv.innerHTML = "本游戏由" + siteInfo.name + "提供";
			document.body.appendChild(providerDiv);
		}
	};
	
	KLCommonFooter.append();

})();
