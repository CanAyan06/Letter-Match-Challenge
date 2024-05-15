// Angular Core'dan Component modülünü import et
import { Component } from '@angular/core';

// Faker kütüphanesinden lorem modülünü import et
import { lorem } from 'faker';

// AppComponent sınıfını oluştur
@Component({
  // Selector belirleme
  selector: 'app-root',
  // HTML dosyası
  templateUrl: './app.component.html',
  // CSS dosyası
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Rastgele bir cümle oluştur
  randomText = lorem.sentence();
  
  // Kullanıcının girdiği metni sakla
  enteredText = '';

  // Metin karşılaştırması için bir değişken
  can = "incorrect";

  // Kullanıcının girdiği metni almak için fonksiyon
  getInputValue(value: string) {
    console.log(this.randomText.split(''));
    this.enteredText = value;
  }

  // Rastgele harf ile girilen harfi karşılaştırmak için fonksiyon
  compare(randomLetter: string, enteredLetter: string) {
    // Eğer girilen harf yoksa 'pending' döndür
    if (!enteredLetter) {
      return 'pending';
    }
    // Rastgele harf ile girilen harf karşılaştırması
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
  
  // Oyunu sıfırlamak için fonksiyon
  resetGame() {
    // Yeni bir rastgele cümle oluştur ve girilen metni temizle
    this.randomText = lorem.sentence();
    this.enteredText = '';
  }
}
