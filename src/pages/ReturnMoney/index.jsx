import Helmet from '../../components/Helmet';
import { Container } from 'react-bootstrap';

function ReturnMoney() {
    return (
        <Helmet title="Hoàn tiền">
            <Container>
                <div className="main">
                    <h4 className="text-center mb-4">CHÍNH SÁCH HOÀN TIỀN</h4>

                    <div>
                        <h6>1. Sản phẩm Chúng tôi giao không đúng đơn đặt hàng hoặc lỗi</h6>
                        <p>- tên sản phẩm, kích thước, mẫu mã, màu sắc</p>
                    </div>

                    <div>
                        <h6>2. Điều kiện đổi trả hàng (chỉ áp dụng khi mua hàng online)</h6>
                        <p>Thời gian: Trong vòng 07 ngày kể từ khi nhận được hàng.</p>
                        <p>Điều kiện về sản phẩm:</p>
                        <p>
                            - Hàng hóa còn đầy đủ: Sản phẩm nguyên vẹn không rách nát, kèm theo các sản phẩm tặng (nếu
                            có).
                        </p>
                    </div>

                    <div>
                        <h6>3. Chi phí chuyển đổi, hoàn trả sản phẩm</h6>
                        <p>
                            - Trong trường hợp lỗi từ phía Chúng tôi: Chúng tôi sẽ chịu hoàn toàn chi phí vận chuyển đổi
                            trả.
                        </p>
                        <p>
                            - Trong trường hợp do nhu cầu cá nhân, khách hàng muốn đổi sản phẩm khác: Khách hàng chịu
                            hoàn toàn chi phí trả hàng và giao sản phẩm mới.{' '}
                        </p>
                    </div>

                    <div>
                        <h6>4. Điều kiện hoàn tiền</h6>
                        <p>Chúng tôi sẽ hoàn tiền cho khách hàng trong 3 trường hợp:</p>
                        <p>- Hoàn tiền khi đặt hàng thành công nhưng chưa nhận sản phẩm</p>
                        <p>
                            Trường hợp này xảy ra khi Chúng tôi hết sản phẩm khách muốn đặt nhưng chưa cập nhật kịp thời
                            trên website hoặc khách hàng đặt nhầm.
                        </p>
                        <p>- Hoàn tiền khi khách hàng nhận được sản phẩm nhưng sản phẩm lỗi từ phía Chúng tôi.</p>
                        <p>
                            - Hoàn tiền khi khách không muốn nhận sản phẩm do nhu cầu cá nhân thay đổi. Chúng tôi sẽ trừ
                            chi phí vận chuyển trực tiếp vào tiền chuyển hoàn của khách hàng.{' '}
                        </p>
                    </div>

                    <p>
                        ***CHÚNG TÔI CHỈ HOÀN TIỀN CHO KHÁCH HÀNG KHI NHẬN ĐƯỢC HÀNG TRẢ LẠI ĐÁP ỨNG ĐỦ CÁC ĐIỀU KIỆN
                        TRÊN.
                    </p>

                    <div>
                        <h6>QUY TRÌNH CHUYỂN HOÀN HÀNG HÓA</h6>
                        <p>1.Gọi điện về số Hotline 0999 999 999 thông báo yêu cầu chuyển hoàn hàng hóa.</p>
                        <p>
                            2.Đóng gói hàng hóa (sản phẩm còn nguyên vẹn (chưa xé tem mác) + hóa đơn + quà tặng (nếu
                            có))
                        </p>
                        <p>
                            3.Chuyển về trực tiếp địa chỉ cửa hàng đã đặt mua online: Trên bưu kiện ghi rõ Họ tên, địa
                            chỉ, SĐT khách hàng và nội dung *YÊU CẦU TRẢ HÀNG
                        </p>
                    </div>
                </div>
            </Container>
        </Helmet>
    );
}

export default ReturnMoney;
