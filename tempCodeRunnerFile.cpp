#include <bits/stdc++.h>
using namespace std;

struct node{
int data;
node *next;
};

void print(node *n){
  while(n!=NULL){
    cout<<n->data<<" ";
    n=n->next;
  }
}
// void push(node **h,int d){
//   node *temp=new node();
//   temp->next=*h;
//   temp->data=d;
//   *h=temp;
// }

void push(node *&h,int d){
  node *temp=new node();
  temp->next=h;
  temp->data=d;
  h=temp;
}

void append(node **n,int d){
  node *temp=new node();
  temp->data=d;
  // n->next=temp;
  temp->next=NULL;
  node *last=*n;
  if(*n==NULL){
    *n=temp;
    return;
  }
  while(last->next!=NULL){
    last=last->next;
  }
  last->next=temp;
  return;
  // while(*n!=NULL){
  //   *n=*n -> next;
  // }
  
  
}
void insert(node *next,int d){
  node *temp=new node();
  temp->data=d;
  temp->next=next->next;
  next->next=temp;
}

void del(node **headr,int key){
  node *n,*prev;
  n=*headr;
  if(n!=NULL && n->data==key){
    *headr=n->next;
    free(n);
    return;
  }
  while(n!=NULL && n->data!=key){
    prev=n;
    n=n->next;
  }
  if(n==NULL){
    return;
  }
  
  prev->next=n->next;
  free(n);
  free(n->next);
}

int main() {

  node *head=new node();
  head->data=3;
  head->next=NULL;
//   cout<<head<<endl;
//   int n;
//   cin>>n;
//   for(int i=0;i<n;i++){
//     int k;
//     cin>>k;
//     // push(&head,k);
//     append(&head,k);
//   }
//   // insert(head,9);
//   // print(head);
//   // push(&head,5);
//   // push(&head,7);
//   print(head);
//   del(&head,4);
//   print(head);
//   cout<<&head<<endl;

print(head);
cout<<endl;
push(head,6);
print(head);



  return 0;
}