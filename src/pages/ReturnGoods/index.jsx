import Helmet from '../../components/Helmet';
import { Container } from 'react-bootstrap';
import { csdt } from '../../assets/images/service_img';
import { useEffect } from 'react';

function ReturnGoods() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <Helmet title="Đổi trả">
            <Container>
                <div className="main">
                    <h4 className="text-center mb-4">CHÍNH SÁCH ĐỔI TRẢ</h4>

                    <h5>A. CHÍNH SÁCH ĐỔI HÀNG ONLINE</h5>

                    <div>
                        <h6>1. Dịch vụ đổi hàng tận nơi:</h6>
                        <p>
                            Nhận biết được sự bất tiện khi cần đổi sản phẩm do không vừa là một khó khăn, khi bạn phải
                            mang hàng ra bưu cục và chờ đợi một thời gian để nhận lại món đồ ưng ý của mình. Nhằm mang
                            lại cho bạn sự tiện lợi và những trải nghiệm tuyệt vời khi mua hàng, tụi mình đã phát triển
                            dịch vụ đổi hàng tận nơi:
                        </p>
                        <p>- Đổi hàng tận nơi, shipper sẽ đến tận nhà để đổi hàng cho bạn.</p>
                        <p>- Áp dụng 01 lần đổi/ 01 đơn hàng.</p>
                        <p>
                            - Áp dụng đổi hàng với tất cả các sản phẩm (bao gồm sản phẩm trong chương trình sale) thời
                            gian đổi hàng trong vòng 7 ngày kể từ ngày khách hàng nhận bưu phẩm.
                        </p>
                        <p>
                            - Trường hợp sản phẩm hết size bạn cần, tụi mình sẽ hỗ trợ bạn đổi sang sản phẩm khác bằng
                            giá trị hoặc cao hơn, trường hợp khách hàng không đồng ý đổi sản phẩm khác, bên mình sẽ
                            refund lại giá trị đơn hàng (Lưu ý không refund đối với sản phẩm sale).
                        </p>
                        <p>
                            - Chi phí vận chuyển khi đổi hàng được Jemco hỗ trợ 1 chiều cho bạn (bạn chỉ cần thanh toán
                            phí ship khi nhận sản phẩm đúng) và 2 chiều đối với sản phẩm do lỗi sản xuất.
                        </p>
                    </div>

                    <div>
                        <h6>2. Điều kiện đổi hàng</h6>
                        <p>
                            - Chỉ nhận đổi sản phẩm khi có trường hợp khách yêu cầu đổi size, phát sinh lỗi từ nhà sản
                            xuất (ố màu, phai màu, lỗi chất liệu, lỗi đường may,…) hoặc giao nhầm sản phẩm.
                        </p>
                        <p>
                            - Sản phẩm đổi phải chưa qua sử dụng, chưa qua giặt tẩy, không bị vấy bẩn, ám mùi, còn giữ
                            nguyên hóa đơn mua hàng và nhãn mác, sản phẩm đổi phải còn nguyên quà tặng kèm (nếu có).
                        </p>
                        <p>
                            - Sản phẩm đổi phải có giá trị tương đương hoặc cao hơn sản phẩm được đổi. Vui lòng thanh
                            toán chi phí chênh lệch giá trị sản phẩm nếu có.
                        </p>
                    </div>

                    <div>
                        <h6>3. Quy trình đổi hàng:</h6>
                        <p>
                            Khách hàng vui lòng đọc kỹ Điều kiện đổi hàng, kiểm tra kỹ sản phẩm trước khi đổi và thực
                            hiện các bước sau:
                        </p>
                        <p>
                            <strong>+ Bước 1:</strong> Nhắn tin cho các kênh Social hoặc Shopee, Lazada chính thức của
                            Jemco.
                        </p>
                        <p>
                            <strong>+ Bước 2:</strong> Cung cấp cho nhân viên cskh video unbox sản phẩm theo hướng dẫn
                            bên dưới.
                        </p>

                        <p>
                            <strong>+ Bước 3: </strong>Cung cấp cho tụi mình thông tin địa chỉ của bạn gồm: Họ tên, số
                            điện thoại, địa chỉ đồng thời quay video gói hàng có dán thông tin (Họ tên, số điện thoại,
                            địa chỉ)
                        </p>
                        <p>
                            <strong>+ Bước 4:</strong> Sau khi xác nhận đổi hàng, tụi mình gửi hàng đúng size/ mẫu về
                            địa chỉ của bạn đồng thời shipper sẽ nhận sản phẩm sai size về của Jemco.
                        </p>
                    </div>

                    <div>
                        <h6>Cách thức quay video unbox sản phẩm:</h6>
                        <img src={csdt} alt="" />
                    </div>
                    <p>
                        Mọi thắc mắc về Chính sách đổi hàng, khách hàng vui lòng gọi đến hotline 0999 999 999 để được
                        bộ phận bán hàng hướng dẫn và giải quyết.
                    </p>
                    
                    <h5>B. CHÍNH SÁCH ĐỔI HÀNG MUA TẠI CỬA HÀNG:</h5>
                    <div>
                        <h6>1. Chính sách áp dụng:</h6>
                        <p>- Chỉ áp dụng đổi hàng với sản phẩm nguyên giá, không áp dụng cho sản phẩm giảm giá.</p>
                        <p>- Áp dụng 01 lần đổi/ 01 đơn hàng.</p>
                        <p>- Thời gian đổi hàng trong vòng 7 ngày kể từ ngày xuất hoá đơn.</p>
                        <p>- Áp dụng đổi hàng tại tất cả các cửa hàng Jemco.</p>
                    </div>

                    <div>
                        <h6>2. Điều kiện đổi hàng:</h6>
                        <p>
                            - Chỉ nhận đổi sản phẩm khi có trường hợp phát sinh lỗi từ nhà sản xuất (ố màu, phai màu,
                            lỗi chất liệu, lỗi đường may,…) hoặc giao nhầm sản phẩm.
                        </p>
                        <p>
                            - Chỉ nhận đổi Size với những sản phẩm cùng loại, không áp dụng đổi Size sang sản phẩm khác.
                        </p>
                        <p>
                            - Sản phẩm đổi phải chưa qua sử dụng, chưa qua giặt tẩy, không bị vấy bẩn, ám mùi, còn giữ
                            nguyên hóa đơn mua hàng và nhãn mác, sản phẩm đổi phải còn nguyên quà tặng kèm (nếu có).
                        </p>
                        <p>
                            - Sản phẩm đổi phải có giá trị tương đương hoặc cao hơn sản phẩm được đổi. Vui lòng thanh
                            toán chi phí chênh lệch giá trị sản phẩm nếu có.
                        </p>
                    </div>

                    <div>
                        <h6>3. Quy trình đổi hàng:</h6>
                        <p>- Khách hàng vui lòng đọc kỹ Điều kiện đổi hàng và kiểm tra kỹ sản phẩm trước khi đổi.</p>
                        <p>
                            - Sản phẩm đủ điều kiện đổi hàng được cho phép áp dụng đổi hàng tại tất cả cửa hàng Jemco.
                        </p>
                    </div>
                </div>
            </Container>
        </Helmet>
    );
}

export default ReturnGoods;
