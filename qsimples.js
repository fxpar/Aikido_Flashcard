const nb = 5;
const questions = [
	[ '01-Ai_hanmi_katatedori_ikkyo_omote_waza.mp4', 'Ai hanmi katate dori <u>ikkyo omote</u> waza'],
	[ '02-Ai_hanmi_katatedori_ikkyo_ura_waza.mp4', 'Ai hanmi katate dori <u>ikkyo ura</u> waza'],
	[ '03-Ai_hanmi_katatedori_nikyo_omote_waza.mp4', 'Ai hanmi katate dori <u>nikyo omote</u> waza'],
	[ '04-Ai_hanmi_katatedori_nikyo_ura_waza.mp4', 'Ai hanmi katate dori <u>nikyo ura</u> waza'],
	[ '05-Ai_Hamni_Katate_Dori_Sankyo_omoto_waza.mp4', 'Ai hanmi katate dori <u>sankyo omote</u> waza'],
	[ '06-Ai_Hamni_Katate_Dori_sankyo_ura_waza.mp4', 'Ai hanmi katate dori <u>sankyo ura</u> waza'],
	[ '07-Ai_Hamni_Katate_Dori_Yonkyo_Omote_waza.mp4', 'Ai hanmi katate dori <u>yonkyo omote</u> waza'],
	[ '08-Ai_Hamni_Katate_Dori_yonkyo_ura_waza.mp4', 'Ai hanmi katate dori <u>yonkyo ura</u> waza'],
	[ '09-Ai_Hamni_Katate_Dori_Shiho_nage_omote.mp4', 'Ai hanmi katate dori <u>Shiho nage omote</u> waza'],
	[ '10-Ai_Hamni_Katate_Dori_Shiho_Nage_ura.mp4', 'Ai hanmi katate dori <u>Shiho nage ura</u> waza'],
	[ '11-Ai_Hamni_Katate_Dori_Irimi_Nage_v1.mp4', 'Ai hanmi katate dori <u>Irimi nage v1</u> waza'],
	[ '12-Ai_Hamni_Katate_Dori_Irimi_Nage_v2.mp4', 'Ai hanmi katate dori <u>Irimi nage v2</u> waza'],
	[ '13-Ai_Hamni_Katate_Dori_Irimi_Nage_v3.mp4', 'Ai hanmi katate dori <u>Irimi nage v3</u> waza'],
	[ '14-Ai_Hamni_Katate_Dori_KoteGaeshi_v1.mp4', 'Ai hanmi katate dori <u>Kote Gaeshi v1</u> waza'],
	[ '15-Ai_Hamni_Katate_Dori_KoteGaeshi_v2.mp4', 'Ai hanmi katate dori <u>Kote Gaeshi v2</u> waza'],
	[ '17-Ai_Hamni_Katate_Dori_Koshi_Nage.mp4', 'Ai hanmi katate dori <u>Irimi nage v2</u> waza'],
	[ '18-Ai_Hamni_Katate_Dori_-_Ushiro_nage.mp4', 'Ai hanmi katate dori <u>Ushiro nage</u> waza'],
	[ '19-Ai_Hamni_Katate_Dori_Ude_gatan.mp4', 'Ai hanmi katate dori <u>Ude Gatan</u> waza'],
	['01-Ryote_Dori_ikkyo_omote_waza.mp4', 'Ryote Dori <u>ikkyo omote</u> waza'],
	['02-Ryote_Dori_ikkyo_ura_waza.mp4', 'Ryote Dori <u>ikkyo ura</u> waza'],
	['03-Ryote_Dori_Nikyo_omote_waza.mp4', 'Ryote Dori <u>Nikyo omote</u> waza'],
	['04-Ryote_Dori_Nikyo_ura_waza.mp4', 'Ryote Dori <u>Nikyo ura</u> waza'],
	['05-Ryote_Dori_Sankyo_omote_waza.mp4', 'Ryote Dori <u>Sankyo omote</u> waza'],
	['06-Ryote_Dori_Sankyo_ura_waza.mp4', 'Ryote Dori <u>Sankyo ura</u> waza'],
	['07-Ryote_Dori_yonkyo_omote_waza.mp4', 'Ryote Dori <u>yonkyo omote</u> waza'],
	['08-Ryote_Dori_yonkyo_ura_waza.mp4', 'Ryote Dori <u>yonkyo ura</u> waza'],
	['09-Ryote_Dori_Gokyo_omote_waza.mp4', 'Ryote Dori <u>Gokyo omote</u> waza'],
	['10-Ryote_Dori_Gokyo_ura_waza.mp4', 'Ryote Dori <u>Gokyo ura</u> waza'],
	['11-Ryote_Dori_Shiho_nage_omote_waza.mp4', 'Ryote Dori <u>Shiho nage omote</u> waza'],
	['12-Ryote_Dori_Shiho_nage_ura_waza.mp4', 'Ryote Dori <u>Shiho nage ura</u> waza'],
	['13-Ryote_Dori_Shiho_nage_v3.mp4', 'Ryote Dori <u>Shiho nage</u> v3'],
	['14-Ryote_Dori_Irimi_nage_jodan.mp4', 'Ryote Dori <u>Irimi nage</u> jodan'],
	['15-Ryote_Dori_Irimi_nage_shiho_nage_jodan.mp4', 'Ryote Dori <u>Irimi nage shiho nage</u> jodan'],
	['16-Ryote_Dori_Irimi_nage_Gedan.mp4', 'Ryote Dori Irimi nage Gedan'],
	['17-Ryote_Dori_Shiho_nage_irimi_nage_gedan.mp4', 'Ryote Dori <u>Shiho nage irimi nage</u> gedan'],
	['18-Ryote_Dori_Irimi_nage_chudan.mp4', 'Ryote Dori Irimi nage chudan'],
	['19-Ryote_Dori_Kino_nage_irimi_nage_shodan.mp4', 'Ryote Dori <u>Kino nage irimi nage</u> shodan'],
	['20-Ryote_Dori_Kote_Gaeshi_v1.mp4', 'Ryote Dori <u>Kote Gaeshi</u> v1'],
	['21-Ryote_Dori_Kote_Gaeshi_v2.mp4', 'Ryote Dori <u>Kote Gaeshi</u> v2'],
	['22-Ryote_Dori_Kaiten_nage.mp4', 'Ryote Dori <u>Kaiten nage</u>']
]