import { Component, OnInit } from '@angular/core';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name = '';
  phone = '';
  address = '';
  errorMessage = '';
  private db = getFirestore();
  private auth = getAuth();

  ngOnInit(): void {
    const user = this.auth.currentUser;
    if (user) {
      const docRef = doc(this.db, 'users', user.uid);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          this.name = data['name'] || '';
          this.phone = data['phone'] || '';
          this.address = data['address'] || '';
        }
      });
    }
  }

  saveProfile() {
    const user = this.auth.currentUser;
    if (!user) {
      this.errorMessage = 'No authenticated user found';
      return;
    }
    if (!this.name || this.phone || this.address) {
      this.errorMessage = 'All fields are required';
      return;
    }
    setDoc(doc(this.db, 'users', user.uid), {});
  }
}
