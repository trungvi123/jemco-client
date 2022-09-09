import Helmet from '../../components/Helmet';
import { Container } from 'react-bootstrap';

function Insurance() {
    return (
        <Helmet title="Bảo hành">
            <Container>
                <div className="main">
                    <h4 className="text-center mb-4">CHÍNH SÁCH BẢO HÀNH</h4>

                    <div>
                        <h6>1. Đối tượng & thời gian áp dụng:</h6>
                        <p>
                            -Đối với CLOTHING: Trong 14 ngày, từ ngày mua hàng theo thời gian ghi trên hoá đơn với các
                            trường hợp bung chỉ, bung nút, kỹ thuật may, giãn cổ áo, quần,… và các trường hợp khác mà
                            Levents có khả năng sửa chữa được.
                        </p>
                        <p>
                            -Đối với ACCESSORIES: Trong 30 ngày, từ ngày mua hàng theo thời gian ghi trên hoá đơn với
                            trường hợp bung đường chỉ, bung quai đeo, hư khoá kéo và tất cả những lỗi kỹ thuật do nhà
                            sản xuất. Bạn sẽ được đổi sang sản phẩm mới 100%.
                        </p>
                        <p>
                            Chúng mình không bảo hành hình in cho tất cả sản phẩm, bạn có thể xem Hướng dẫn bảo quản/vệ
                            sinh sản phẩm in ấn tại đây hoặc trong quá trình sử dụng sản phẩm, mọi thắc mắc vui lòng
                            inbox Fanpgage hoặc Hotline 1900 63 3028 để được tụi mình hỗ trợ nhanh chóng.
                        </p>
                    </div>

                    <div>
                        <h6>2. Thời gian bảo hành:</h6>
                        <p>Trong 07-20 ngày tuỳ vào tình trạng sản phẩm sau khi nhận được hàng từ bạn.</p>
                    </div>

                    <div>
                        <h6>3. Hỗ trợ sau thời gian bảo hành:</h6>
                        <p>
                            JEMCO vẫn tiếp tục hỗ trợ bảo hành những lỗi đơn giản trong vòng 30 ngày kể từ ngày bạn nhận
                            hàng đã bảo hành gửi trả.
                        </p>
                        <p>
                            Nếu sản phẩm của bạn có lỗi quá nặng do quá trình sử dụng lâu, tụi mình sẽ tư vấn hướng sửa
                            chữa kèm với mức phí tốt nhất để bạn có thể dễ dàng quyết định.
                        </p>
                    </div>

                    <div>
                        <h6>4. Trường hợp không được bảo hành:</h6>
                        <p>
                            Lỗi do sử dụng không đúng cách như: sử dụng quá tải so với sức chứa, chịu lực, size của sản
                            phẩm, làm cho sản phẩm thay đổi quá nhiều so với hình dạng ban đầu.
                        </p>
                        <p>
                            Lỗi do bảo quản không đúng quy cách như: sử dụng chất tẩy rửa mạnh để giặt và gây lem màu,
                            phơi nắng quá lâu làm hư hại sản phẩm…
                        </p>
                        <p>
                            Sản phẩm hư hỏng do tác động bên ngoài, biến dạng, rách thủng, ẩm mốc, cháy hoặc do người sử
                            dụng làm hỏng.
                        </p>
                        <p>Sản phẩm đã qua sử dụng bị dơ bẩn, đã được sửa chữa bởi người sử dụng.</p>
                        <p>Sản phẩm đã quá hạn bảo hành.</p>
                    </div>
                </div>
            </Container>
        </Helmet>
    );
}

export default Insurance;
