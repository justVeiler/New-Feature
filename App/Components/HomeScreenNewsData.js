import {AppRegistry} from 'react-native';
import details from '../Containers/DetailScreen';

const newsData = [
  {
    id: 1,
    header: "Việt Nam tụt 11 hạng về tốc độ Internet di động",
    desc: "VnExpress",
    content:
      "Tốc độ Internet di động tại Việt Nam trong tháng 5 xếp thứ 60 trên thế giới, tụt 11 hạng so với tháng 4"
  },
  {
    id: 2,
    header: "'Thiết bị tiết kiệm điện không như quảng cáo'",
    desc: "VnExpress",
    content:
      "Các thiết bị được quảng cáo giảm 30-40% lượng điện tiêu thụ nhưng thực tế, theo Bộ Công Thương, không giảm điện năng như quảng cáo"
  },

  {
    id: 3,
    header: "Hà Nội xuất hiện 3 ổ dịch sốt xuất huyết",
    desc: "VnExpress",
    content:
      "Ba xã gồm Tam Hiệp (huyện Phúc Thọ), Khánh Hà (huyện Thường Tín), Thanh Thùy (huyện Thanh Oai) có nhiều người mắc sốt xuất huyết, diễn biến phức tạp.\n" +
      "\n" +
      "Thống kê của Sở Y tế Hà Nội ghi nhận 634 người mắc sốt xuất huyết, phân bố tại 28/30 quận huyện. Ba xã có nhiều bệnh nhân nhất gồm Tam Hiệp với 182 ca, Khánh Hà 48 ca, Thanh Thùy 44 ca."
  },
  {
    id: "news4",
    header: "Huawei đang chịu sức ép lớn đến mức nào",
    desc: "VnExpress",
    content:
      'Ngoại trưởng Mỹ Mike Pompeo cho rằng "thủy triều đang quay lưng với Huawei khi người dân khắp thế giới thức tỉnh trước rủi ro bị Trung Quốc theo dõi".\n' +
      "\n" +
      'Pompeo ca ngợi những nước như Séc, Ba Lan và Estonia "chỉ cho phép những nhà cung cấp đáng tin tham gia mạng 5G". Carisa Nietsche - nhà nghiên cứu tại Trung tâm An ninh Mỹ thì cho biết nhiều nước trong số này đã quyết định việc trên từ năm ngoái rồi. Bên cạnh đó, nhiều nền kinh tế lớn hơn tại châu Âu, như Anh, Pháp và Đức vẫn chưa công bố cấm Huawei hoàn toàn.s'
  }
];

export default newsData;
