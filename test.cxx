
#include <stdio.h>
#include <iostream>
#include <string>
#include <cstdlib>
#include <cstring>
using namespace std;

class Data {
private:
  int data;
public:
  Data() {}
  Data(int data) : data(data) {
    cout << "construcotr" << endl;
  }
  Data& operator=(const int data) {
    cout << "operator=(int data)" << endl;
    this->data = data;
    return *this;
  }
};

int main(int argc, char *argv[]) {
  // Data data1(1);
  // Data data2, data3;
  // cout << "------------" << endl;
  // data2 = 1;
  // cout << "------------" << endl;
  // data3 = data2;
  // data3.operator=(4);
  Data *data4 = new Data(8);
  data4->operator=(5);
  return 0;
}