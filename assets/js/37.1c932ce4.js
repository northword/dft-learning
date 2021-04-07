(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{464:function(v,_,t){"use strict";t.r(_);var e=t(4),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"incar-中的常用标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#incar-中的常用标签"}},[v._v("#")]),v._v(" INCAR 中的常用标签")]),v._v(" "),t("p",[v._v("整理一些常用的碰到的tags，没有的依然是返回VASP手册咯；整理了的都是最简单的信息，更多信息也是查手册咯。分类和顺序按OUTCAR描述的。")]),v._v(" "),t("p",[v._v("标签名似乎也有一些规律，如以 L 开头的几乎都是逻辑（Logic）标签，取值都是布尔；")]),v._v(" "),t("p",[v._v("与常规编程不同，INCAR中所有标签的取值，字符串类型无需加引号，如"),t("code",[v._v("SYSTEM = O2_geo")]),v._v("；布尔类型应在两端加上"),t("code",[v._v(".")]),v._v("，如"),t("code",[v._v("LWAVE = .FALSE.")]),v._v("；")]),v._v(" "),t("p",[v._v("几种必要的数据类型（仅是为了方便我理解，这个并不用会）：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("中文名")]),v._v(" "),t("th",[v._v("值域")]),v._v(" "),t("th",[v._v("备注")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("16位整型")]),v._v(" "),t("td",[v._v("-32768～+32767")]),v._v(" "),t("td",[v._v("VASP的int类型通常指定了仅有的几种取值")])]),v._v(" "),t("tr",[t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("实型")]),v._v(" "),t("td",[v._v("-2^128 ~ 2^128")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("BOOL")]),v._v(" "),t("td",[v._v("布尔")]),v._v(" "),t("td",[v._v("0或1")]),v._v(" "),t("td",[v._v("VASP中用"),t("code",[v._v(".TURE.")]),v._v("和"),t("code",[v._v(".FALSE.")])])])])]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#start-parameters"}},[v._v("Start Parameters")]),t("ul",[t("li",[t("a",{attrs:{href:"#system"}},[v._v("SYSTEM")])]),t("li",[t("a",{attrs:{href:"#istart"}},[v._v("ISTART")])]),t("li",[t("a",{attrs:{href:"#ispin"}},[v._v("ISPIN")])]),t("li",[t("a",{attrs:{href:"#icharg"}},[v._v("ICHARG")])])])]),t("li",[t("a",{attrs:{href:"#i-o-flags"}},[v._v("I/O Flags")])]),t("li",[t("a",{attrs:{href:"#electronic-relaxation"}},[v._v("Electronic Relaxation")]),t("ul",[t("li",[t("a",{attrs:{href:"#encut"}},[v._v("ENCUT")])]),t("li",[t("a",{attrs:{href:"#ediff"}},[v._v("EDIFF")])]),t("li",[t("a",{attrs:{href:"#gga"}},[v._v("GGA")])])])]),t("li",[t("a",{attrs:{href:"#ionic-relaxation"}},[v._v("Ionic Relaxation")]),t("ul",[t("li",[t("a",{attrs:{href:"#ediffg"}},[v._v("EDIFFG")])]),t("li",[t("a",{attrs:{href:"#nsw"}},[v._v("NSW")])]),t("li",[t("a",{attrs:{href:"#ibrion"}},[v._v("IBRION")])]),t("li",[t("a",{attrs:{href:"#isif"}},[v._v("ISIF")])]),t("li",[t("a",{attrs:{href:"#isym"}},[v._v("ISYM")])]),t("li",[t("a",{attrs:{href:"#potim"}},[v._v("POTIM")])])])]),t("li",[t("a",{attrs:{href:"#dos-related-values"}},[v._v("DOS related values")]),t("ul",[t("li",[t("a",{attrs:{href:"#ismear"}},[v._v("ISMEAR")])]),t("li",[t("a",{attrs:{href:"#sigma"}},[v._v("SIGMA")])])])]),t("li",[t("a",{attrs:{href:"#dft-u"}},[v._v("DFT+U")])])])]),t("p"),v._v(" "),t("h2",{attrs:{id:"start-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-parameters"}},[v._v("#")]),v._v(" Start Parameters")]),v._v(" "),t("h3",{attrs:{id:"system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[v._v("#")]),v._v(" SYSTEM")]),v._v(" "),t("p",[v._v("取值：字符串。缺省值："),t("code",[v._v("unknown system")])]),v._v(" "),t("p",[v._v("描述：用来备注计算的体系，其值会被写入"),t("code",[v._v("OUTCAR")]),v._v("中。")]),v._v(" "),t("h3",{attrs:{id:"istart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#istart"}},[v._v("#")]),v._v(" ISTART")]),v._v(" "),t("p",[v._v("取值：0 | 1 | 2 | 3")]),v._v(" "),t("p",[v._v("缺省值：如果"),t("code",[v._v("WAVECAR")]),v._v("存在，则为"),t("code",[v._v("1")]),v._v("，否则为"),t("code",[v._v("0")])]),v._v(" "),t("p",[v._v("描述：是否读取"),t("code",[v._v("WAVECAR")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("ISTART")]),v._v(" "),t("th",[v._v("Function")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("0")]),v._v(" "),t("td",[v._v("从头开始")])]),v._v(" "),t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("从WAVECAR读取轨道")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v(".")])])])]),v._v(" "),t("h3",{attrs:{id:"ispin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ispin"}},[v._v("#")]),v._v(" ISPIN")]),v._v(" "),t("p",[v._v("取值：1（缺省） | 2")]),v._v(" "),t("p",[v._v("描述：自旋极化。")]),v._v(" "),t("p",[v._v("ISPIN = 1 ：不自旋")]),v._v(" "),t("p",[v._v("ISPIN = 2 ：自旋")]),v._v(" "),t("p",[v._v("需要考虑自旋极化一般来说有以下几种：")]),v._v(" "),t("ol",[t("li",[v._v("单原子的计算,")]),v._v(" "),t("li",[v._v("O2 分子(基态为三重态)")]),v._v(" "),t("li",[v._v("自由基相关的计算")]),v._v(" "),t("li",[v._v("含Fe,Co, Ni 的体系")]),v._v(" "),t("li",[v._v("要计算的体系具有磁性：顺磁，铁磁，反铁磁等，要打开自旋极化。")]),v._v(" "),t("li",[v._v("当关注体系的电子性质时，且自己不知道加或者不加的时候，建议加上。")])]),v._v(" "),t("p",[v._v("与"),t("code",[v._v("MAGMOM")]),v._v("结合，可以研究共线磁性。")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.bigbrosci.com/2017/12/04/ex12/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Ex12 VASP中MAGMOM的简单设定 | Learn VASP The Hard Way"),t("OutboundLink")],1)]),v._v(" "),t("h3",{attrs:{id:"icharg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icharg"}},[v._v("#")]),v._v(" ICHARG")]),v._v(" "),t("p",[v._v("取值：0 | 1 | 2 | 4")]),v._v(" "),t("p",[v._v("缺省：ICHARG=2 if ISTART=0，=0 else")]),v._v(" "),t("p",[v._v("描述：决定VASP如何构造初始电荷密度")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("ICHARG")]),v._v(" "),t("th",[v._v("Function")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("0")]),v._v(" "),t("td",[v._v("从初始波函数计算电荷密度。如果因为无效WAVECAR导致ISTART重置，则ICHARG会被设置为2。")])]),v._v(" "),t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("从CHGCAR读取电荷密度，使用原子电荷密度的线性组合从旧位置（在CHGCAR上）外推到新位置。")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("原子电荷密度叠加")])]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("+10")]),v._v(" "),t("td",[v._v("非自洽计算")])])])]),v._v(" "),t("h2",{attrs:{id:"i-o-flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-o-flags"}},[v._v("#")]),v._v(" I/O Flags")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Parameters")]),v._v(" "),t("th",[v._v("Default")]),v._v(" "),t("th",[v._v("Describe")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("LWAVE")]),v._v(" "),t("td",[t("code",[v._v(".TRUE.")])]),v._v(" "),t("td",[v._v("是否将波函数写入"),t("code",[v._v("WAVECAR")])])]),v._v(" "),t("tr",[t("td",[v._v("LCHARG")]),v._v(" "),t("td",[t("code",[v._v(".TRUE.")])]),v._v(" "),t("td",[v._v("是否将电荷密度写入"),t("code",[v._v("CHGCAR")]),v._v("和"),t("code",[v._v("CHG")])])])])]),v._v(" "),t("h2",{attrs:{id:"electronic-relaxation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electronic-relaxation"}},[v._v("#")]),v._v(" Electronic Relaxation")]),v._v(" "),t("h3",{attrs:{id:"encut"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encut"}},[v._v("#")]),v._v(" ENCUT")]),v._v(" "),t("p",[v._v("截断能")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("ENCUT值越大，计算的越精确，花费的时间也就越多；")])]),v._v(" "),t("li",[t("p",[v._v("ENCUT的取值与体系中所有的元素有关；")]),v._v(" "),t("ul",[t("li",[v._v("A）体系中含有不同元素的时候，查看这些元素POTCAR中的ENMAX值，找出最大的那个；")]),v._v(" "),t("li",[v._v("B）ENCUT的最小值为所有元素中ENMAX的最大值！")]),v._v(" "),t("li",[v._v("C）也就是说，找到最大的ENMAX（max）， ENCUT值大于等于ENMAX（max）。")])])])]),v._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://www.bigbrosci.com/2017/12/09/ex17/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Ex17 谁偷走的我的机时？（二） |  Learn VASP The Hard Way"),t("OutboundLink")],1)])]),v._v(" "),t("h3",{attrs:{id:"ediff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ediff"}},[v._v("#")]),v._v(" EDIFF")]),v._v(" "),t("p",[v._v("取值：real。缺省值："),t("code",[v._v("1E-4")])]),v._v(" "),t("p",[v._v("描述：控制电子步（自洽）的收敛标准。多数情况下1E-4足以胜任，没必要采用其他数值。")]),v._v(" "),t("h3",{attrs:{id:"gga"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gga"}},[v._v("#")]),v._v(" GGA")]),v._v(" "),t("p",[v._v("GGA = 91 | PE | RP | PS | AM")]),v._v(" "),t("p",[v._v("缺省：POTCAR中的")]),v._v(" "),t("p",[v._v("GGA指定希望使用的广义梯度近似的类型。")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.vasp.at/wiki/wiki/index.php/GGA",target:"_blank",rel:"noopener noreferrer"}},[v._v("GGA - VASP Wiki"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"ionic-relaxation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ionic-relaxation"}},[v._v("#")]),v._v(" Ionic Relaxation")]),v._v(" "),t("h3",{attrs:{id:"ediffg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ediffg"}},[v._v("#")]),v._v(" EDIFFG")]),v._v(" "),t("p",[v._v("取值：real。缺省值："),t("code",[v._v("EDIFF")]),v._v("x10")]),v._v(" "),t("p",[v._v("描述：离子弛豫的收敛标准")]),v._v(" "),t("p",[v._v("如果为正，表示两个离子步骤之间的总（自由）能变化小于"),t("code",[v._v("EDIFFG")]),v._v("时停止弛豫。一般取0.0001 ~ 0.001即可。")]),v._v(" "),t("p",[v._v("如果为负，则原子所受最大力小于"),t("code",[v._v("|EDIFFG|")]),v._v("时停止弛豫。一般取值-0.01 ~ -0.05（-0.01对于力收敛已经是个很严格的要求了）")]),v._v(" "),t("blockquote",[t("p",[v._v("取值范围引自大师兄科研网："),t("a",{attrs:{href:"https://www.bigbrosci.com/2017/12/02/ex09/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.bigbrosci.com/2017/12/02/ex09/"),t("OutboundLink")],1)])]),v._v(" "),t("h3",{attrs:{id:"nsw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsw"}},[v._v("#")]),v._v(" NSW")]),v._v(" "),t("p",[v._v("取值：int。缺省值："),t("code",[v._v("0")])]),v._v(" "),t("p",[v._v("描述：离子步的最大步数")]),v._v(" "),t("p",[v._v("IBRION = 0 时，NSW给出了所有从头开始的Molecular Dynamics运行的步骤数，因此必须提供它，否则VASP在启动后立即崩溃。")]),v._v(" "),t("p",[v._v("IBRION != 0 时，在所有最小化算法（准牛顿，共轭梯度和阻尼分子动力学）中，NSW定义了最大离子步数。")]),v._v(" "),t("h3",{attrs:{id:"ibrion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibrion"}},[v._v("#")]),v._v(" IBRION")]),v._v(" "),t("p",[v._v("取值： -1 | 0 | 1 | 2 | 3 | 5 | 6 | 7 | 8 | 44")]),v._v(" "),t("p",[v._v("缺省：IBRION = -1 for NSW = -1 or 0 ,  =0 else")]),v._v(" "),t("p",[v._v("描述：决定离子如何移动")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("IBRION")]),v._v(" "),t("th",[v._v("Function")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("-1")]),v._v(" "),t("td",[v._v("静电自洽。此时NSW应为0。")])]),v._v(" "),t("tr",[t("td",[v._v("0")]),v._v(" "),t("td",[v._v("分子动力学")])]),v._v(" "),t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("离子弛豫（RMM-DIIS） 小范围内的稳定结构搜索")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("离子弛豫（共轭梯度算法） "),t("strong",[v._v("常用")])])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("离子弛豫（damp 分子动力学）初始结构很差时")])]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("频率计算。5-8都是，但常用5.")])]),v._v(" "),t("tr",[t("td",[v._v("44")]),v._v(" "),t("td",[v._v("改进的dimmer方法")])])])]),v._v(" "),t("p",[v._v("IBRION=5 and 6: second derivatives, Hessian matrix and phonon frequencies (finite differences). 对于IBRION=5时，所有原子都在三个笛卡尔方向上移动，即使对于中等大小的高对称系统，也需要大量的计算工作。对于IBRION = 6，仅考虑对称不等价位移，并使用对称性考虑填充其余的Hessian矩阵。IBRION=5支持选择性弛豫，6不支持。")]),v._v(" "),t("p",[v._v("IBRION=7 and 8: second derivatives, Hessian matrix and phonon frequencies (perturbation theory).")]),v._v(" "),t("p",[v._v("详细："),t("a",{attrs:{href:"https://www.vasp.at/wiki/wiki/index.php/IBRION",target:"_blank",rel:"noopener noreferrer"}},[v._v("IBRION - VASP Wiki"),t("OutboundLink")],1)]),v._v(" "),t("h3",{attrs:{id:"isif"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isif"}},[v._v("#")]),v._v(" ISIF")]),v._v(" "),t("p",[v._v("取值：ISIF = "),t("code",[v._v("0")]),v._v(" | "),t("code",[v._v("1")]),v._v(" | "),t("code",[v._v("2")]),v._v(" | "),t("code",[v._v("3")]),v._v(" | "),t("code",[v._v("4")]),v._v(" | "),t("code",[v._v("5")]),v._v(" | "),t("code",[v._v("6")]),v._v(" | "),t("code",[v._v("7")])]),v._v(" "),t("p",[v._v("缺省值："),t("code",[v._v("0")]),v._v(" (当IBRION=0，分子动力学时；否则为"),t("code",[v._v("2")]),v._v(")")]),v._v(" "),t("p",[v._v("描述：1 有哪些需要算，2 有哪些自由度可以优化。")]),v._v(" "),t("p",[v._v("决定是否计算应力张量，以及允许哪些主要自由度改变弛豫和分子动力学。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("ISIF")]),v._v(" "),t("th",[v._v("calculate")]),v._v(" "),t("th"),v._v(" "),t("th",[v._v("degrees-of-freedom")]),v._v(" "),t("th"),v._v(" "),t("th")])]),v._v(" "),t("tbody",[t("tr",[t("td"),v._v(" "),t("td",[v._v("forces")]),v._v(" "),t("td",[v._v("Stress tensor")]),v._v(" "),t("td",[v._v("positions")]),v._v(" "),t("td",[v._v("cell shape")]),v._v(" "),t("td",[v._v("cell volume")])]),v._v(" "),t("tr",[t("td",[v._v("0")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("no")])]),v._v(" "),t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("trace only")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("no")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("no")])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")])]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")])]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")])]),v._v(" "),t("tr",[t("td",[v._v("6")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")])]),v._v(" "),t("tr",[t("td",[v._v("7")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("no")]),v._v(" "),t("td",[v._v("yes")])])])]),v._v(" "),t("h3",{attrs:{id:"isym"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isym"}},[v._v("#")]),v._v(" ISYM")]),v._v(" "),t("p",[v._v("是否考虑对称性。取值：0 | 1 | 2（默认）    0-nonsym 1-usesym 2-fastsym")]),v._v(" "),t("h3",{attrs:{id:"potim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#potim"}},[v._v("#")]),v._v(" POTIM")]),v._v(" "),t("p",[v._v("time-step（MD），单位fs；step width scaling (ionic relaxations).")]),v._v(" "),t("p",[v._v("缺省：if "),t("strong",[v._v("IBRION=0（MD）")]),v._v("，无缺省，必须用户指定，否则崩溃。")]),v._v(" "),t("p",[v._v("if "),t("strong",[v._v("IBRION=1，2，3（弛豫），缺省0.5")]),v._v("。所有最小化算法（1准牛顿，2共轭梯度和3阻尼damped分子动力学）中，POTIM均用作步长的缩放常数。特别是准牛顿算法对此参数的选择很敏感。")]),v._v(" "),t("p",[v._v("if **IBRION=5（频率），缺省0.015。**In frozen phonon calculations, POTIM gives the width of the displacement of each ion to calculate the Hessian Matrix.")]),v._v(" "),t("p",[t("strong",[v._v("VASP.5.1")]),v._v(" and newer releases: 如果给的值不合理（过大），会被重置为 0.015 Å.")]),v._v(" "),t("blockquote",[t("p",[v._v("在"),t("code",[v._v("IBRION=2")]),v._v(" 时（这是前提！！），如果初始结构很差，设置较小的"),t("code",[v._v("POTIM")]),v._v("可以有效的避免过度矫正。初始结构越好，"),t("code",[v._v("POTIM")]),v._v("的选择也就越随意。")])]),v._v(" "),t("h2",{attrs:{id:"dos-related-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dos-related-values"}},[v._v("#")]),v._v(" DOS related values")]),v._v(" "),t("h3",{attrs:{id:"ismear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ismear"}},[v._v("#")]),v._v(" ISMEAR")]),v._v(" "),t("p",[v._v("ISMEAR这一项，目前需要记住的是：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("不同的值对应的是不同的展宽方法")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("对于分子，原子的计算用0")]),v._v("。")])]),v._v(" "),t("p",[v._v("下面是VASP官网的一些解释，新手暂时看不懂不要紧，把需要记住的这两条死死记住就可以了。")]),v._v(" "),t("ul",[t("li",[v._v("对于半导体和绝缘体体系，ISMEAR的值取绝对不能大于0， 一般用0；")]),v._v(" "),t("li",[v._v("对所有体系，如果想获取更加精确能量的时候用-5：但使用-5的时候，K点数目小于3则程序会罢工；")]),v._v(" "),t("li",[v._v("K 点少，半导体或者绝缘体，那么只能用 ISMEAR = 0；")]),v._v(" "),t("li",[v._v("在DOS能带计算中，使用ISMEAR= -5 用于获取精确的信息。")]),v._v(" "),t("li",[v._v("对于金属来说，ISMEAR的取值一般为0，1；")]),v._v(" "),t("li",[v._v("保守地说，ISMEAR = 0 (Gaussian Smearing) 可以满足大部分的体系（金属，导体，半导体，分子）；")]),v._v(" "),t("li",[v._v("如果不知道怎么取ISMEAR，1）直接用0；2）测试不同的值对计算的影响。")])]),v._v(" "),t("h3",{attrs:{id:"sigma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sigma"}},[v._v("#")]),v._v(" SIGMA")]),v._v(" "),t("p",[v._v("SIGMA的取值和ISMEAR息息相关，也就是和ISMEAR这个参数同时出现，设定。下面是一些基本的介绍：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如果用了ISMEAR = -5； SIGMA的值可以忽略，也可以不管。（对于所有体系都适用)；")])]),v._v(" "),t("li",[t("p",[v._v("对于金属： ISMEAR = 1 或者0，非金属: ISMEAR= 0 的时候，一般取 SIGMA = 0.10 即可，默认值是0.20。不放心的话，用0.05。")])]),v._v(" "),t("li",[t("p",[v._v("对于气体分子，原子体系（也就是你把分子或者原子放到一个box里面）：死死记住下面组合就可以了， ISMEAR = 0; SIGMA = 0.01。")])]),v._v(" "),t("li",[t("p",[v._v("设置一个较小的SIGMA值会使收敛变慢。")])]),v._v(" "),t("li",[t("p",[v._v("半导体和绝缘体：")]),v._v(" "),t("p",[v._v("1） K点小于4 的时候，用"),t("code",[v._v("ISMEAR=0")]),v._v(", "),t("code",[v._v("SIGMA")]),v._v("取值小一些；比如SIGMA=0.05; 此时用ISMEAR = -5 会出错；")]),v._v(" "),t("p",[v._v("2）K点数目大于4的时候，可以使用"),t("code",[v._v("ISMEAR= -5")]),v._v("；")])])]),v._v(" "),t("p",[v._v("不过很多人都不放心，为了保险想测试一番。标准是： SIGMA的取值要保证OUTCAR 中的 entropy T*S 这一项，平均到每个原子上，要小于 1-2 meV。检查的时候可以用这个命令:")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("grep 'entropy T'  OUTCAR\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("**注意1：**这里有两个单引号，不要输入的时候漏掉。")]),v._v(" "),t("p",[v._v("用这个命令，得出的能量除以体系中原子的数目（也就是平均到每个原子上），然后再和 0.001 eV 比较。如果小于，SIGMA取值OK，如果大于，再换个小点的数值进行测试。")]),v._v(" "),t("p",[v._v("**注意2：**这里的说的entropy，是因为ISMEAR展宽这个计算方法引入的，跟我们物理化学书里面的entropy完全是两码事。后面我们会介绍如何通过频率分析计算物理化学里面的Entropy。")]),v._v(" "),t("blockquote",[t("p",[v._v("摘抄自大师兄网站："),t("a",{attrs:{href:"https://www.bigbrosci.com/2017/10/15/ex1_02_vasp_preparation_input_incar/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.bigbrosci.com/2017/10/15/ex1_02_vasp_preparation_input_incar/"),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"dft-u"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dft-u"}},[v._v("#")]),v._v(" DFT+U")]),v._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pages/35fcd2/"}},[v._v("转向 DFT+U 页")])],1),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("br")])}),[],!1,null,null,null);_.default=a.exports}}]);