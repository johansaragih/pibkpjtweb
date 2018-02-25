
export interface PackageDetails {

  id: number;
  seriBarang: number;
  hsCode: number;
  uraianBarang: string;
  kodeNegaraAsal: string;
  jumlahKemasan: number;
  kodeSatuanHarga: string;
  jumlahSatuanHarga: number;
  flagPembebasan?: number;
  nomorSKEPembebasan?: number;
  tanggalSKEPPembebasan?: number
  kodePungutan?: string;
  nilai?: number;
  kodeTarif?: number;
  kodeSatuanTarif?: number;
  jumlahSatuanTarif?: number;
  tarif?: number;
  nomorHouseBLAWB?: string;
  jenisTarif?: number;
  beaMasukTarif?: number;
  pajakPenghasilanTarif?: number;
  pajakPertambahanNilaiTarif?: number;
  pajakPertambahanNilaiBarangMewahTarif?: number;
  cif?: number;

}