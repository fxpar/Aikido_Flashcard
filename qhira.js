const nb = 8;
const questions = [

['Hiragana_letter_A.svg', 'A', 'あ', 'A', 'A', 'vk', 'あいきどう', 'aikido'],
['Hiragana_letter_Ba.svg', 'Ba', 'ば', 'B', 'A', '', 'ばらい', 'barai'],
['Hiragana_letter_Be.svg', 'Be', 'べ', 'B', 'E', '', 'べんきょう', 'benkyo'],
['Hiragana_letter_Bi.svg', 'Bi', 'び', 'B', 'I', '', 'びんた', 'binta'],
['Hiragana_letter_Bo.svg', 'Bo', 'ぼ', 'B', 'O', '', 'ぼうぎょ', 'bougyo'],
['Hiragana_letter_Bu.svg', 'Bu', 'ぶ', 'B', 'U', '', 'ぶどう', 'budou'],
['Hiragana_letter_Da.svg', 'Da', 'だ', 'D', 'A', '', 'だん', 'dan'],
['Hiragana_letter_De.svg', 'De', 'で', 'D', 'E', '', 'でんこう', 'denkou'],
['Hiragana_letter_Di.svg', 'Di', 'ぢ', 'D', 'I', '', 'ぢゅう', 'juu'],
['Hiragana_letter_Do.svg', 'Do', 'ど', 'D', 'O', '', 'どうじょう', 'doujou'],
['Hiragana_letter_Du.svg', 'Du', 'づ', 'D', 'U', '', 'づつき', 'zutsuki'],
['Hiragana_letter_E.svg', 'E', 'え', 'E', 'E', 'vk', 'えんぶ', 'embu'],
['Hiragana_letter_Ga.svg', 'Ga', 'が', 'G', 'A', '', 'がえし', 'gaeshi'],
['Hiragana_letter_Ge.svg', 'Ge', 'げ', 'G', 'E', '', 'げり', 'geri'],
['Hiragana_letter_Gi.svg', 'Gi', 'ぎ', 'G', 'I', '', 'ぎ', 'keigogi'],
['Hiragana_letter_Go.svg', 'Go', 'ご', 'G', 'O', '', 'ごしん', 'goshin'],
['Hiragana_letter_Gu.svg', 'Gu', 'ぐ', 'G', 'U', '', 'ぐん', 'gun'],
['Hiragana_letter_Ha.svg', 'Ha', 'は', 'H', 'A', 'nh', 'はじめ', 'hajime'],
['Hiragana_letter_He.svg', 'He', 'へ', 'H', 'E', 'nh', 'へんか', 'henka'],
['Hiragana_letter_Hi.svg', 'Hi', 'ひ', 'H', 'I', 'nh', 'ひねり', 'hineri'],
['Hiragana_letter_Ho.svg', 'Ho', 'ほ', 'H', 'O', 'nh', 'ほん', 'hon'],
['Hiragana_letter_Hu.svg', 'Hu', 'ふ', 'H', 'U', 'nh', 'ふみきり', 'fumikiri'],
['Hiragana_letter_I.svg', 'I', 'い', 'I', 'I', 'vk', 'いりみ', 'irimi'],
['Hiragana_letter_Ka.svg', 'Ka', 'か', 'K', 'A', 'vk', 'かた', 'kata'],
['Hiragana_letter_Ke.svg', 'Ke', 'け', 'K', 'E', 'vk', 'けいこ', 'keiko'],
['Hiragana_letter_Ki.svg', 'Ki', 'き', 'K', 'I', 'vk', 'きほん', 'kihon'],
['Hiragana_letter_Ko.svg', 'Ko', 'こ', 'K', 'O', 'vk', 'こころ', 'kokoro'],
['Hiragana_letter_Ku.svg', 'Ku', 'く', 'K', 'U', 'vk', 'くずし', 'kuzushi'],
['Hiragana_letter_Ma.svg', 'Ma', 'ま', 'M', 'A', 'mw', 'まえ', 'mae'],
['Hiragana_letter_Me.svg', 'Me', 'め', 'M', 'E', 'mw', 'めん', 'men'],
['Hiragana_letter_Mi.svg', 'Mi', 'み', 'M', 'I', 'mw', 'みぎ', 'migi'],
['Hiragana_letter_Mo.svg', 'Mo', 'も', 'M', 'O', 'mw', 'もち', 'mochi'],
['Hiragana_letter_Mu.svg', 'Mu', 'む', 'M', 'U', 'mw', 'むね', 'mune'],
['Hiragana_letter_N.svg', 'N', 'ん', 'N', 'N', 'nh', 'ん', 'n'],
['Hiragana_letter_Na.svg', 'Na', 'な', 'N', 'A', 'nh', 'なげ', 'nage'],
['Hiragana_letter_Ne.svg', 'Ne', 'ね', 'N', 'E', 'nh', 'ねん', 'nen'],
['Hiragana_letter_Ni.svg', 'Ni', 'に', 'N', 'I', 'nh', 'にんじゃ', 'ninja'],
['Hiragana_letter_No.svg', 'No', 'の', 'N', 'O', 'nh', 'のび', 'nobi'],
['Hiragana_letter_Nu.svg', 'Nu', 'ぬ', 'N', 'U', 'nh', 'ぬけ', 'nuke'],
['Hiragana_letter_O.svg', 'O', 'お', 'O', 'O', 'vk', 'おもて', 'omote'],
['Hiragana_letter_Pa.svg', 'Pa', 'ぱ', 'P', 'A', '', 'ぱんち', 'panchi'],
['Hiragana_letter_Pe.svg', 'Pe', 'ぺ', 'P', 'E', '', 'ぺん', 'pen'],
['Hiragana_letter_Pi.svg', 'Pi', 'ぴ', 'P', 'I', '', 'ぴん', 'pin'],
['Hiragana_letter_Po.svg', 'Po', 'ぽ', 'P', 'O', '', 'ぽん', 'pon'],
['Hiragana_letter_Pu.svg', 'Pu', 'ぷ', 'P', 'U', '', 'ぷん', 'pun'],
['Hiragana_letter_Ra.svg', 'Ra', 'ら', 'R', 'A', 'mw', 'らん', 'ran'],
['Hiragana_letter_Re.svg', 'Re', 'れ', 'R', 'E', 'mw', 'れい', 'rei'],
['Hiragana_letter_Ri.svg', 'Ri', 'り', 'R', 'I', 'mw', 'りょう', 'ryo'],
['Hiragana_letter_Ro.svg', 'Ro', 'ろ', 'R', 'O', 'mw', 'ろく', 'roku'],
['Hiragana_letter_Ru.svg', 'Ru', 'る', 'R', 'U', 'mw', 'るい', 'rui'],
['Hiragana_letter_Sa.svg', 'Sa', 'さ', 'S', 'A', 'st', 'さぼり', 'saburi'],
['Hiragana_letter_Se.svg', 'Se', 'せ', 'S', 'E', 'st', 'せいり', 'seiri'],
['Hiragana_letter_Si.svg', 'Si', 'し', 'S', 'I', 'st', 'しめ', 'shime'],
['Hiragana_letter_small_Wa.svg', 'Wa', 'わ', 'W', 'A', 'mw', 'わざ', 'waza'],
['Hiragana_letter_small_We.svg', 'We', 'ゑ', 'W', 'E', 'mw', 'ゑん', 'wen'],
['Hiragana_letter_small_Wi.svg', 'Wi', 'ゐ', 'W', 'I', 'mw', 'ゐん', 'win'],
['Hiragana_letter_small_Wo.svg', 'Wo', 'を', 'W', 'O', 'mw', 'を', 'wo'],
['Hiragana_letter_small_Ya.svg', 'Ya', 'や', 'Y', 'A', 'mw', 'やり', 'yari'],
['Hiragana_letter_small_Yo.svg', 'Yo', 'よ', 'Y', 'O', 'mw', 'よこ', 'yoko'],
['Hiragana_letter_small_Yu.svg', 'Yu', 'ゆ', 'Y', 'U', 'mw', 'ゆう', 'yu'],
['Hiragana_letter_So.svg', 'So', 'そ', 'S', 'O', 'st', 'そうじ', 'soji'],
['Hiragana_letter_Su.svg', 'Su', 'す', 'S', 'U', 'st', 'すわり', 'suwari'],
['Hiragana_letter_Ta.svg', 'Ta', 'た', 'T', 'A', 'st', 'たいさぶき', 'taisabaki'],
['Hiragana_letter_Te.svg', 'Te', 'て', 'T', 'E', 'st', 'てんかん', 'tenkan'],
['Hiragana_letter_Ti.svg', 'Ti', 'ち', 'T', 'I', 'st', 'ちから', 'chikara'],
['Hiragana_letter_To.svg', 'To', 'と', 'T', 'O', 'st', 'とり', 'tori'],
['Hiragana_letter_Tu.svg', 'Tu', 'つ', 'T', 'U', 'st', 'つかい', 'tsukai'],
['Hiragana_letter_U.svg', 'U', 'う', 'U', 'U', 'vk', 'うけみ', 'ukemi'],
['Hiragana_letter_Vu.svg', 'Vu', 'ヴ', 'V', 'U', '', 'ヴぁいきどう', 'vaikido'],
['Hiragana_letter_Wa.svg', 'Wa', 'わ', 'W', 'A', 'mw', 'わざ', 'waza'],
['Hiragana_letter_We.svg', 'We', 'ゑ', 'W', 'E', 'mw', 'ゑん', 'wen'],
['Hiragana_letter_Wi.svg', 'Wi', 'ゐ', 'W', 'I', 'mw', 'ゐん', 'win']


]